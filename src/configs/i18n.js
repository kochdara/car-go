import { createI18n } from 'vue-i18n'
import messageEn from '@/lang/en'
import messageKm from '@/lang/km'

export default createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        message: messageEn
      },
      km: {
        message: messageKm
      }
    }
})