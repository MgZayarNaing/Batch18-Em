import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { AppProvider } from '../context/AppContext'
import { asyncStoragePersister, queryClient } from '../api/queryClient'

export const AppProviders = ({ children }) => {
    return (
        <SafeAreaProvider>
            <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{persister:asyncStoragePersister}}
            >
                <AppProvider>
                    {children}
                </AppProvider>
            </PersistQueryClientProvider>
        </SafeAreaProvider>
    )
}