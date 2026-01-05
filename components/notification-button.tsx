'use client'

import { useEffect, useState } from 'react'

interface NotificationButtonProps {
	pokemonName?: string
}

export function NotificationButton({ pokemonName }: NotificationButtonProps) {
	const [permission, setPermission] =
		useState<NotificationPermission>('default')

	useEffect(() => {
		if (typeof window !== 'undefined' && 'Notification' in window) {
			setPermission(Notification.permission)
		}
	}, [])

	const requestPermission = async () => {
		if ('Notification' in window) {
			const result = await Notification.requestPermission()
			setPermission(result)
			return result
		}
		return 'denied'
	}

	const scheduleNotification = async () => {
		let currentPermission = permission
		if (currentPermission !== 'granted') {
			currentPermission = await requestPermission()
		}

		if (currentPermission === 'granted') {
			alert('Powiadomienie zostanie wysłane za minutę!')

			const notificationBody = pokemonName
				? `Minęła minuta! Czas na ${pokemonName}!`
				: 'Minęła minuta!'

			setTimeout(async () => {
				let swRegistration = null
				if ('serviceWorker' in navigator) {
					try {
						swRegistration = await Promise.race([
							navigator.serviceWorker.ready,
							new Promise((_, reject) =>
								setTimeout(
									() => reject(new Error('SW timeout')),
									2000
								)
							),
						])
					} catch (e) {
						console.log(
							'Service Worker not ready, falling back to standard notification'
						)
					}
				}

				if (swRegistration) {
					;(
						swRegistration as ServiceWorkerRegistration
					).showNotification('Przypomnienie', {
						body: notificationBody,
						icon: '/icons/android-chrome-192x192.png',
					})
				} else {
					new Notification('Przypomnienie', {
						body: notificationBody,
						icon: '/icons/android-chrome-192x192.png',
					})
				}
			}, 60000)
		} else {
			alert(
				'Musisz zezwolić na powiadomienia, aby skorzystać z tej funkcji.'
			)
		}
	}

	if (typeof window !== 'undefined' && !('Notification' in window)) {
		return null
	}

	return (
		<button
			onClick={scheduleNotification}
			className='fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl z-50 transition-all transform hover:scale-105 flex items-center gap-2'
		>
			<span>🔔</span>
			<span>Powiadom za minutę</span>
		</button>
	)
}
