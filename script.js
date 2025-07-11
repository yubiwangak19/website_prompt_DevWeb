document.addEventListener('DOMContentLoaded', function() {
    // Data form input
    const formFields = [
        {
            id: 'project-type',
            label: 'Jenis Proyek',
            type: 'select',
            options: ['Website Perusahaan', 'Portfolio', 'E-commerce', 'Blog', 'Aplikasi Web', 'Landing Page', 'Dashboard Admin'],
            required: true
        },
        {
            id: 'tech-stack',
            label: 'Teknologi yang Digunakan',
            type: 'multiselect',
            options: ['HTML/CSS/JS', 'React', 'Vue', 'Angular', 'Svelte', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'PHP', 'Laravel', 'Python', 'Django', 'Ruby on Rails'],
            required: true
        },
        {
            id: 'design-style',
            label: 'Gaya Desain',
            type: 'select',
            options: ['Modern', 'Minimalis', 'Vintage', 'Futuristik', 'Industrial', 'Elegant', 'Playful', 'Professional'],
            required: true
        },
        {
            id: 'color-preference',
            label: 'Preferensi Warna',
            type: 'text',
            placeholder: 'Contoh: Biru dan putih dengan aksen emas',
            required: false
        },
        {
            id: 'key-features',
            label: 'Fitur Utama',
            type: 'textarea',
            placeholder: 'Deskripsikan fitur utama yang diperlukan',
            required: true
        },
        {
            id: 'target-audience',
            label: 'Target Audiens',
            type: 'text',
            placeholder: 'Contoh: Usia 25-40, profesional tech',
            required: false
        },
        {
            id: 'special-requirements',
            label: 'Persyaratan Khusus',
            type: 'textarea',
            placeholder: 'Aksesibilitas, SEO, performa tinggi, dll.',
            required: false
        },
        {
            id: 'content-type',
            label: 'Jenis Konten Utama',
            type: 'select',
            options: ['Teks', 'Gambar', 'Video', 'Produk', 'Portfolio', 'Formulir', 'Interaktif'],
            required: true
        },
        {
            id: 'timeline',
            label: 'Kerangka Waktu',
            type: 'select',
            options: ['Cepat (1-2 minggu)', 'Standar (3-4 minggu)', 'Panjang (1-2 bulan)', 'Fleksibel'],
            required: false
        }
    ];

    // Render form
    const formContainer = document.getElementById('form-container');
    formFields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'space-y-1';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700';
        label.htmlFor = field.id;
        label.textContent = field.label;
        if (field.required) {
            label.innerHTML += ' <span class="text-red-500">*</span>';
        }

        div.appendChild(label);

        if (field.type === 'select') {
            const select = document.createElement('select');
            select.id = field.id;
            select.name = field.id;
            select.className = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border';

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Pilih --';
            select.appendChild(defaultOption);

            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                select.appendChild(opt);
            });

            div.appendChild(select);
        } 
        else if (field.type === 'multiselect') {
            const select = document.createElement('select');
            select.id = field.id;
            select.name = field.id;
            select.multiple = true;
            select.className = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border';

            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                select.appendChild(opt);
            });

            div.appendChild(select);
        }
        else if (field.type === 'textarea') {
            const textarea = document.createElement('textarea');
            textarea.id = field.id;
            textarea.name = field.id;
            textarea.rows = 3;
            textarea.placeholder = field.placeholder || '';
            textarea.className = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border';
            div.appendChild(textarea);
        }
        else {
            const input = document.createElement('input');
            input.type = field.type || 'text';
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder || '';
            input.className = 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border';
            div.appendChild(input);
        }

        formContainer.appendChild(div);
    });

    // Contoh prompt
    const examplePrompts = [
        {
            title: "Website Portfolio Fotografer",
            prompt: "Buatkan konsep website portfolio untuk fotografer profesional dengan gaya minimalis. Gunakan warna hitam, putih, dan aksen emas. Teknologi: HTML/CSS/JS dengan Tailwind CSS. Fitur utama: galeri dengan kategori, halaman tentang, formulir kontak, dan integrasi Instagram. Prioritaskan tampilan gambar yang menonjol dengan loading cepat."
        },
        {
            title: "E-commerce Fashion",
            prompt: "Rancang prompt untuk website e-commerce fashion dengan target audiens wanita usia 20-35 tahun. Teknologi: React dengan Node.js backend. Fitur: pencarian produk dengan filter, sistem ulasan, checkout multi-step, integrasi pembayaran, dan rekomendasi produk. Gaya desain modern dengan warna pastel. Sertakan manajemen inventaris di dashboard admin."
        },
        {
            title: "Dashboard Admin SaaS",
            prompt: "Buatkan prompt untuk dashboard admin aplikasi SaaS manajemen proyek. Teknologi: Vue 3 dengan TypeScript dan Tailwind CSS. Fitur: statistik real-time, manajemen pengguna, notifikasi, kalender, dan laporan ekspor. Gunakan desain clean dengan warna biru dan abu-abu. Prioritaskan UX dengan navigasi yang intuitif dan loading cepat."
        }
    ];

    const examplesContainer = document.querySelector('.grid.gap-4');
    examplePrompts.forEach(example => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer border border-gray-200';
        
        const title = document.createElement('h3');
        title.className = 'font-semibold text-indigo-600 mb-2';
        title.textContent = example.title;
        
        const prompt = document.createElement('p');
        prompt.className = 'text-sm text-gray-600 line-clamp-4';
        prompt.textContent = example.prompt;
        
        card.appendChild(title);
        card.appendChild(prompt);
        
        card.addEventListener('click', () => {
            document.getElementById('prompt-output').textContent = example.prompt;
        });
        
        examplesContainer.appendChild(card);
    });

    // Generate prompt
    document.getElementById('generate-btn').addEventListener('click', function() {
        let prompt = "Saya ingin membuat ";
        
        // Project type
        const projectType = document.getElementById('project-type').value;
        if (projectType) {
            prompt += projectType.toLowerCase() + " ";
        }
        
        // Tech stack
        const techStack = Array.from(document.getElementById('tech-stack').selectedOptions)
            .map(opt => opt.value).join(', ');
        if (techStack) {
            prompt += "menggunakan teknologi " + techStack + ". ";
        }
        
        // Design style
        const designStyle = document.getElementById('design-style').value;
        if (designStyle) {
            prompt += "Gaya desain yang diinginkan adalah " + designStyle.toLowerCase() + ". ";
        }
        
        // Color preference
        const colorPref = document.getElementById('color-preference').value;
        if (colorPref) {
            prompt += "Skema warna: " + colorPref + ". ";
        }
        
        // Key features
        const keyFeatures = document.getElementById('key-features').value;
        if (keyFeatures) {
            prompt += "Fitur utama yang harus ada: " + keyFeatures + ". ";
        }
        
        // Target audience
        const targetAudience = document.getElementById('target-audience').value;
        if (targetAudience) {
            prompt += "Target audiens: " + targetAudience + ". ";
        }
        
        // Special requirements
        const specialReq = document.getElementById('special-requirements').value;
        if (specialReq) {
            prompt += "Persyaratan khusus: " + specialReq + ". ";
        }
        
        // Content type
        const contentType = document.getElementById('content-type').value;
        if (contentType) {
            prompt += "Jenis konten utama: " + contentType.toLowerCase() + ". ";
        }
        
        // Timeline
        const timeline = document.getElementById('timeline').value;
        if (timeline) {
            prompt += "Kerangka waktu pengembangan: " + timeline.toLowerCase() + ". ";
        }
        
        prompt += "Buatkan konsep lengkap termasuk struktur halaman, komponen UI utama, dan pertimbangan UX.";
        
        document.getElementById('prompt-output').textContent = prompt;
    });

    // Copy to clipboard
    document.getElementById('copy-btn').addEventListener('click', function() {
        const promptText = document.getElementById('prompt-output').textContent;
        if (promptText.trim()) {
            navigator.clipboard.writeText(promptText).then(() => {
                const btn = document.getElementById('copy-btn');
                btn.innerHTML = '<i class="far fa-copy"></i> Tersalin!';
                setTimeout(() => {
                    btn.innerHTML = '<i class="far fa-copy"></i> Salin';
                }, 2000);
            });
        }
    });
});