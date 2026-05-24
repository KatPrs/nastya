'use client';
import { useState } from 'react';

export default function RSVPForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('Отправляю...');
    
    // Вставьте сюда ваш URL от Google Apps Script
    const SCRIPT_URL = 'ВАШ_URL_ИЗ_GOOGLE_APPS_SCRIPT';

    const formData = {
      name: e.target.name.value,
      attendance: e.target.attendance.value,
      guestsCount: e.target.guestsCount.value,
      comment: e.target.comment.value,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setStatus('Спасибо! Мы получили ваш ответ.');
    } catch {
      setStatus('Ошибка при отправке, попробуйте еще раз.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-6">
      <input name="name" placeholder="Имя и фамилия" required className="w-full border-b border-stone-300 bg-transparent py-2 focus:outline-none" />
      <select name="attendance" className="w-full border-b border-stone-300 bg-transparent py-2">
        <option value="Буду">С радостью буду!</option>
        <option value="Не смогу">К сожалению, не смогу</option>
      </select>
      <input name="guestsCount" type="number" placeholder="Количество гостей" className="w-full border-b border-stone-300 bg-transparent py-2" />
      <textarea name="comment" placeholder="Ваши пожелания" className="w-full border-b border-stone-300 bg-transparent py-2" />
      <button className="w-full py-3 bg-stone-800 text-white hover:bg-stone-700 transition">Отправить</button>
      <p className="text-center text-sm">{status}</p>
    </form>
  );
}