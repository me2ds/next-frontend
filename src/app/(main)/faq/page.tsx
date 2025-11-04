"use cache"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

const FAQPage = async () => {
  const faqs = [
    {
      question: "Как создать аккаунт?",
      answer: "Нажмите кнопку 'Войти в аккаунт' и выберите удобный способ авторизации через Google, GitHub или Telegram."
    },
    {
      question: "Как добавить друга?",
      answer: "После авторизации используйте форму на главной странице, введите код друга или никнейм и отправьте заявку."
    },
    {
      question: "Как слушать музыку вместе?",
      answer: "Создайте или присоединитесь к плейлисту, пригласите друзей и наслаждайтесь синхронным прослушиванием."
    },
    {
      question: "Как создать сообщество?",
      answer: "В разделе сообществ нажмите 'Создать сервер', настройте каналы и пригласите участников."
    },
    {
      question: "Безопасны ли мои данные?",
      answer: "Мы используем современные методы шифрования и не передаем ваши данные третьим лицам."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Часто задаваемые вопросы</h1>
        <p className="text-muted-foreground">Ответы на популярные вопросы о Desme</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FAQPage
