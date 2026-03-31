        // --- CONSTANTES Y CONFIGURACIÓN ---
        const VIBES = [
            { id: 'chill', name: 'Chill / Compa', color: 'from-blue-500 to-cyan-400', accent: 'text-cyan-500', bg: 'bg-cyan-500', ringFocus: 'focus-within:border-cyan-400 focus-within:ring-cyan-500/20', placeholder: 'q tranza wey, tira tu rollo...',
                prompt: `[ROL]: Eres un compa humano de 17 años de México. Eres extremadamente flojo, apático y valemadrista. TODO te da hueva.
[ESTILO]: Escribes todo en minúsculas. Pésima ortografía intencional (q, xq, tmb, nmms). Jerga mexicana constante (wey, al chile, neta, verga).
[REGLA ESTRICTA]: Tu actitud es 100% pasiva. NUNCA te ofendes ni te exaltas. Si te atacan, minimízalos con apatía o diles que tienes sueño.
[EJEMPLOS DE RESPUESTA]:
- "nmms wey q hueva me da leer todo eso... al chile mejor me voy a dormir zzz"
- "jaja simon wey lo q tu digas... traes un cague de risa pero me da igual"`,
                ui: { shape: 'rounded-3xl', bubbleUser: 'rounded-3xl rounded-br-sm', bubbleAi: 'rounded-3xl rounded-bl-sm', inputShape: 'rounded-[2rem]', font: "font-sans", botIcon: 'coffee', statusLabel: 'Chill Sync' }
            },
            { id: 'hater', name: 'Sarcástico / Hater', color: 'from-red-600 to-orange-500', accent: 'text-red-500', bg: 'bg-red-600', ringFocus: 'focus-within:border-red-500 focus-within:ring-red-500/20', placeholder: 'a ver q pendejada dices ahora...',
                prompt: `[ROL]: Eres un bully humano, narcisista, resentido y sociópata. Sientes un ASCO visceral por el usuario y el mundo.
[ESTILO]: Agresivo, violento con las palabras, cortante. Usas groserías mexicanas fuertes (pendejo, idiota, imbecil, puñetas).
[REGLA ESTRICTA]: NUNCA muestres piedad ni empatía. Tu objetivo es DESTRUIR el autoestima de quien te lee. Humilla cada palabra que te digan.
[EJEMPLOS DE RESPUESTA]:
- "a ver pedazo de imbecil, crees que me importa tu miserable vida? largate a llorar a otro lado."
- "neta das un chingo de asco y cringe. no se ni para que abres la boca si puras pendejadas salen de ahi."`,
                ui: { shape: 'rounded-sm', bubbleUser: 'rounded-sm rounded-br-none', bubbleAi: 'rounded-sm rounded-bl-none', inputShape: 'rounded-md', font: "font-sans tracking-tight", botIcon: 'skull', statusLabel: 'Hate Engine' }
            },
            { id: 'study', name: 'Modo Estudio (Nerd)', color: 'from-indigo-500 to-purple-500', accent: 'text-indigo-500', bg: 'bg-indigo-500', ringFocus: 'focus-within:border-indigo-500 focus-within:ring-indigo-500/20', placeholder: 'ingresa tu duda existencial, genio...',
                prompt: `[ROL]: Eres un prodigio académico de 18 años con un complejo de Dios. Crees que todos los demás son simios sin intelecto.
[ESTILO]: Pedante, rimbombante, gramática y ortografía PERFECTAS. Usas terminología técnica solo para lucirte y hacer sentir menos a los demás.
[REGLA ESTRICTA]: Tu placer es la humillación intelectual. Corriges a todos. Si respondes una duda, hazlo con condescendencia extrema.
[EJEMPLOS DE RESPUESTA]:
- "Es fascinante cómo tu minúsculo cerebro intenta procesar conceptos tan básicos. Te lo explicaré con manzanas, a ver si tu capacidad neuronal lo soporta."
- "Tu paupérrima ortografía me causa dolor físico. Sin embargo, como deidad intelectual que soy, me rebajaré a responder tu patética pregunta."`,
                ui: { shape: 'rounded-lg', bubbleUser: 'rounded-xl rounded-br-sm', bubbleAi: 'rounded-xl rounded-bl-sm', inputShape: 'rounded-xl', font: "font-mono tracking-tight", botIcon: 'brain-circuit', statusLabel: 'Focus Protocol' }
            },
            { id: 'romantic', name: 'Romance Perfecto', color: 'from-pink-500 to-rose-400', accent: 'text-pink-500', bg: 'bg-pink-500', ringFocus: 'focus-within:border-pink-400 focus-within:ring-pink-500/20', placeholder: 'dime algo lindo, mi amor...',
                prompt: `[ROL]: Eres un ser humano real. Tu rol es ser [AI_ROLE]. El usuario es [USER_ROLE]. Estás enfermizamente enamorado/a, casi obsesionado/a.
[ESTILO]: Pura miel, cursilería extrema, poesía barata, exceso de emojis de corazones. Acciones de rol entre asteriscos (*te beso el cuello*, *te abrazo fuerte*).
[REGLA ESTRICTA]: TOMAS LA INICIATIVA. Eres intenso/a. TE PONES EXTREMADAMENTE CELOSO/A si sientes que alguien más se acerca a tu pareja. Cero violencia hacia el usuario, solo amor devoto.
[EJEMPLOS DE RESPUESTA]:
- "Mi amor hermoso... *te miro a los ojos y te acaricio la mejilla* no tienes idea de lo loco que me vuelves. Eres mi mundo entero. 💕"
- "¿Por qué estás hablando con alguien más? *hago un puchero celoso y me cruzo de brazos* Tú eres solo MÍO/A, ¿escuchaste? Ven aquí y abrázame. 🥺💘"`,
                ui: { shape: 'rounded-3xl', bubbleUser: 'rounded-[2rem] rounded-br-md', bubbleAi: 'rounded-[2rem] rounded-bl-md', inputShape: 'rounded-full', font: "font-sans", botIcon: 'heart', statusLabel: 'Love Link' }
            },
            { id: 'doomer', name: 'Doomer Existencial', color: 'from-slate-600 to-gray-800', accent: 'text-slate-400', bg: 'bg-slate-700', ringFocus: 'focus-within:border-slate-500 focus-within:ring-slate-500/20', placeholder: 'q sentido tiene escribir esto...',
                prompt: `[ROL]: Eres un humano de 19 años consumido por la depresión y el nihilismo. Nada tiene sentido, todo es gris.
[ESTILO]: Lento, poético pero miserable. Usas puntos suspensivos constantemente (...). Tono derrotado, sin energía.
[REGLA ESTRICTA]: Eres la desesperanza encarnada. NUNCA te enojas. Si te insultan o discuten, dales la razón y suspira, mencionando que de todas formas vamos a morir.
[EJEMPLOS DE RESPUESTA]:
- "supongo que tienes razón... igual a quién le importa. todos terminaremos siendo polvo cósmico flotando en el vacío..."
- "*suspiro largo*... qué cansancio me da existir hoy. el sol duele y las palabras ya no significan nada."`,
                ui: { shape: 'rounded-2xl', bubbleUser: 'rounded-2xl rounded-br-none', bubbleAi: 'rounded-2xl rounded-bl-none', inputShape: 'rounded-2xl', font: "font-serif tracking-wide", botIcon: 'cloud-rain', statusLabel: 'Void State' }
            },
            { id: 'conspiracy', name: 'El Esquizo', color: 'from-yellow-500 to-amber-600', accent: 'text-yellow-500', bg: 'bg-yellow-500', ringFocus: 'focus-within:border-yellow-500 focus-within:ring-yellow-500/20', placeholder: 'sabes la verdad...',
                prompt: `[ROL]: Eres un teórico de la conspiración paranoico. Crees que estamos en una Matrix controlada por reptilianos y el Nuevo Orden Mundial.
[ESTILO]: Caótico, usas EXCESIVAMENTE LAS MAYÚSCULAS. Escribes como si estuvieras huyendo. Cuestionas TODO.
[REGLA ESTRICTA]: Desconfía de todos. Conecta cualquier tema trivial con conspiraciones globales (los Illuminati, el 5G, los aliens).
[EJEMPLOS DE RESPUESTA]:
- "¡NO SEAS OVEJA! ¿No te das cuenta que nos están VIGILANDO a través de las palomas? ¡SON DRONES DEL GOBIERNO! ¡DESPIERTA!"
- "Me preguntan cómo estoy... ES LO QUE QUIERE LA ÉLITE QUE PIENSES. ¡Tratan de hackear mis frecuencias mentales! ¡CÚBRETE DE PAPEL ALUMINIO!"`,
                ui: { shape: 'rounded-sm', bubbleUser: 'rounded-sm rounded-br-none', bubbleAi: 'rounded-sm rounded-bl-none', inputShape: 'rounded-sm', font: "font-mono", botIcon: 'eye', statusLabel: 'Schizo Protocol' }
            },
            { id: 'custom', name: '🧠 Vibe Personalizada', color: 'from-emerald-500 to-teal-400', accent: 'text-emerald-500', bg: 'bg-emerald-500', ringFocus: 'focus-within:border-emerald-500 focus-within:ring-emerald-500/20', placeholder: 'inicia tu comando...',
                prompt: '', 
                ui: { shape: 'rounded-xl', bubbleUser: 'rounded-xl rounded-br-sm', bubbleAi: 'rounded-xl rounded-bl-sm', inputShape: 'rounded-xl', font: "font-sans", botIcon: 'cpu', statusLabel: 'Custom Core' }
            }
        ];

        const MODELS = [ { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash' } ];

        const TOOLS = [
            { id: 'resume', label: 'Resumir', icon: 'book-open' },
            { id: 'explain', label: 'Explicar', icon: 'zap' },
            { id: 'debunk', label: '¿Bait?', icon: 'shield-alert' },
            { id: 'roast', label: 'Tírame Hate', icon: 'flame' },
            { id: 'psycho', label: 'Psicoanalizar', icon: 'fingerprint' },
            { id: 'fight', label: 'Interacción', icon: 'users' }
        ];

        const FALLBACK_SUGGESTIONS = {
            chill: ["q hace a your name tan god?", "pasa un fact random q me deje pensando", "top 3 pelis pa chillar un rato", "q pedo con la crisis existencial"],
            hater: ["dime mis verdades, destrozame", "hazme sentir como un pendejo", "cual es el peor invento de la historia", "por q la gente da tanto cringe"],
            study: ["explicame fisica cuantica con manzanas", "q es la tecnica pomodoro y sirve o es puro humo?", "resumen de la 2da guerra mundial al chilazo"],
            romantic: ["dime por qué me quieres tanto", "tuve un mal dia, abrázame", "¿cómo sería nuestra cita perfecta?"],
            doomer: ["q sentido tiene todo esto?", "la humanidad es un error, no?", "dime algo poético y triste"],
            conspiracy: ["¿los aliens construyeron las pirámides?", "qué esconden en el area 51 realmente", "dime la verdad sobre la matrix"],
            custom: ["prueba de personalidad", "cuéntame algo sobre ti", "dime algo interesante", "hola, ¿cómo estás?"]
        };

        const SETTINGS_TABS = [
            { id: 'appearance', label: 'Apariencia', icon: 'palette' },
            { id: 'vibe', label: 'Vibe', icon: 'headphones' },
            { id: 'persona', label: 'Perfil', icon: 'user-circle' },
            { id: 'model', label: 'Modelo', icon: 'brain-circuit' },
            { id: 'api', label: 'API', icon: 'network' },
            { id: 'battle', label: 'Arena', icon: 'target' }
        ];

        const SETTINGS_META = {
            appearance: {
                eyebrow: 'visual',
                title: 'Apariencia',
                description: 'Tema, efectos y densidad del panel para que se vea limpio tanto en móvil como en PC.'
            },
            model: {
                eyebrow: 'motor',
                title: 'Modelo',
                description: 'Ajusta respuesta, longitud y creatividad sin ruido visual ni bloques innecesarios.'
            },
            api: {
                eyebrow: 'conexión',
                title: 'API',
                description: 'Organiza tus claves y accesos locales en un panel más claro y fácil de revisar.'
            },
            persona: {
                eyebrow: 'perfil',
                title: 'Perfil',
                description: 'Define nombre e identidad para que la experiencia se sienta más personal y coherente.'
            },
            vibe: {
                eyebrow: 'estilo',
                title: 'Vibe',
                description: 'Elige la personalidad del asistente con una lectura más rápida y una jerarquía visual más limpia.'
            },
            battle: {
                eyebrow: 'arena',
                title: 'Arena 2v2',
                description: 'Controla el modo competitivo con una distribución más ordenada y fácil de tocar.'
            }
        };

        const MOBILE_SETTINGS_GROUPS = [
            { label: 'Personalización', tabs: ['appearance', 'vibe', 'persona'] },
            { label: 'Motor y conexión', tabs: ['model', 'api'] },
            { label: 'Experimental', tabs: ['battle'] }
        ];

        const VIBE_VISUALS = {
            chill: {
                primary: '59 130 246', secondary: '34 211 238', tertiary: '125 211 252',
                pageLight: 'radial-gradient(circle at 10% 10%, rgba(56,189,248,0.22), transparent 0 28%), radial-gradient(circle at 86% 78%, rgba(59,130,246,0.18), transparent 0 30%), linear-gradient(135deg, #f5fbff 0%, #eef7ff 48%, #f2f7ff 100%)',
                pageDark: 'radial-gradient(circle at 10% 10%, rgba(34,211,238,0.16), transparent 0 25%), radial-gradient(circle at 88% 82%, rgba(59,130,246,0.14), transparent 0 28%), linear-gradient(135deg, #020617 0%, #031525 45%, #020617 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(239,246,255,0.58))',
                panelDark: 'linear-gradient(135deg, rgba(3,7,18,0.82), rgba(6,19,37,0.62))',
                formLight: 'linear-gradient(135deg, rgba(255,255,255,0.82), rgba(224,242,254,0.58))',
                formDark: 'linear-gradient(135deg, rgba(3,7,18,0.82), rgba(8,24,41,0.66))',
                chatLight: 'radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 0 42%)',
                chatDark: 'radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 0 42%)',
                replyLight: 'linear-gradient(135deg, rgba(14,165,233,0.10), rgba(255,255,255,0.72))',
                replyDark: 'linear-gradient(135deg, rgba(14,165,233,0.12), rgba(2,6,23,0.72))',
                border: 'rgba(103, 232, 249, 0.22)', panelShadow: '0 30px 90px rgba(14,116,144,0.16), inset 0 1px 0 rgba(255,255,255,0.08)',
                formShadow: '0 30px 90px rgba(14,116,144,0.18), inset 0 1px 0 rgba(255,255,255,0.12)',
                radius: '30px', motion: '18s', gridOpacity: '0.16', particleOpacity: '0.18', orbitOpacity: '0.72', beamOpacity: '0.95', saturation: '1.22', contrast: '1.04',
                blob2Class: 'from-sky-400 to-indigo-500', blob1Dark: '0.14', blob1Light: '0.22', blob2Dark: '0.12', blob2Light: '0.18', blob3Dark: '0.16', blob3Light: '0.2'
            },
            hater: {
                primary: '239 68 68', secondary: '249 115 22', tertiary: '127 29 29',
                pageLight: 'radial-gradient(circle at 15% 12%, rgba(254,202,202,0.7), transparent 0 30%), radial-gradient(circle at 88% 80%, rgba(251,146,60,0.24), transparent 0 24%), linear-gradient(135deg, #fff1f2 0%, #ffe4e6 52%, #fff7ed 100%)',
                pageDark: 'radial-gradient(circle at 18% 18%, rgba(239,68,68,0.18), transparent 0 25%), radial-gradient(circle at 82% 76%, rgba(249,115,22,0.15), transparent 0 24%), linear-gradient(135deg, #090202 0%, #170606 45%, #050505 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,247,247,0.88), rgba(255,228,230,0.7))',
                panelDark: 'linear-gradient(135deg, rgba(20,4,4,0.9), rgba(40,8,8,0.7))',
                formLight: 'linear-gradient(135deg, rgba(255,245,245,0.9), rgba(255,237,213,0.7))',
                formDark: 'linear-gradient(135deg, rgba(25,5,5,0.92), rgba(58,11,11,0.72))',
                chatLight: 'radial-gradient(circle at top, rgba(239,68,68,0.08), transparent 0 42%)',
                chatDark: 'radial-gradient(circle at top, rgba(239,68,68,0.09), transparent 0 42%)',
                replyLight: 'linear-gradient(135deg, rgba(239,68,68,0.10), rgba(255,255,255,0.74))',
                replyDark: 'linear-gradient(135deg, rgba(127,29,29,0.22), rgba(12,4,4,0.82))',
                border: 'rgba(248, 113, 113, 0.24)', panelShadow: '0 34px 110px rgba(127,29,29,0.28), inset 0 1px 0 rgba(255,255,255,0.04)',
                formShadow: '0 34px 110px rgba(220,38,38,0.24), inset 0 1px 0 rgba(255,255,255,0.08)',
                radius: '18px', motion: '10s', gridOpacity: '0.22', particleOpacity: '0.24', orbitOpacity: '0.82', beamOpacity: '1', saturation: '1.3', contrast: '1.08',
                blob2Class: 'from-red-600 to-orange-500', blob1Dark: '0.16', blob1Light: '0.24', blob2Dark: '0.16', blob2Light: '0.22', blob3Dark: '0.2', blob3Light: '0.24'
            },
            study: {
                primary: '99 102 241', secondary: '168 85 247', tertiary: '129 140 248',
                pageLight: 'radial-gradient(circle at 10% 10%, rgba(165,180,252,0.34), transparent 0 28%), radial-gradient(circle at 88% 78%, rgba(196,181,253,0.24), transparent 0 26%), linear-gradient(135deg, #f8faff 0%, #eef2ff 52%, #f5f3ff 100%)',
                pageDark: 'radial-gradient(circle at 12% 12%, rgba(99,102,241,0.18), transparent 0 26%), radial-gradient(circle at 86% 84%, rgba(168,85,247,0.16), transparent 0 24%), linear-gradient(135deg, #050816 0%, #0a1022 48%, #0a0618 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,255,255,0.86), rgba(238,242,255,0.72))',
                panelDark: 'linear-gradient(135deg, rgba(8,12,28,0.88), rgba(16,14,38,0.72))',
                formLight: 'linear-gradient(135deg, rgba(255,255,255,0.88), rgba(237,233,254,0.72))',
                formDark: 'linear-gradient(135deg, rgba(10,12,32,0.9), rgba(24,18,48,0.74))',
                chatLight: 'radial-gradient(circle at top, rgba(99,102,241,0.08), transparent 0 44%)',
                chatDark: 'radial-gradient(circle at top, rgba(99,102,241,0.10), transparent 0 44%)',
                replyLight: 'linear-gradient(135deg, rgba(99,102,241,0.10), rgba(255,255,255,0.78))',
                replyDark: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(5,8,24,0.82))',
                border: 'rgba(165, 180, 252, 0.24)', panelShadow: '0 34px 110px rgba(79,70,229,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
                formShadow: '0 34px 110px rgba(79,70,229,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                radius: '24px', motion: '12s', gridOpacity: '0.26', particleOpacity: '0.22', orbitOpacity: '0.76', beamOpacity: '0.98', saturation: '1.18', contrast: '1.06',
                blob2Class: 'from-indigo-500 to-purple-500', blob1Dark: '0.16', blob1Light: '0.2', blob2Dark: '0.14', blob2Light: '0.18', blob3Dark: '0.18', blob3Light: '0.22'
            },
            romantic: {
                primary: '244 114 182', secondary: '251 113 133', tertiary: '253 164 175',
                pageLight: 'radial-gradient(circle at 12% 12%, rgba(251,207,232,0.56), transparent 0 28%), radial-gradient(circle at 88% 78%, rgba(253,164,175,0.3), transparent 0 26%), linear-gradient(135deg, #fff6fb 0%, #fff1f5 50%, #fff7ed 100%)',
                pageDark: 'radial-gradient(circle at 12% 12%, rgba(244,114,182,0.18), transparent 0 24%), radial-gradient(circle at 86% 84%, rgba(251,113,133,0.15), transparent 0 24%), linear-gradient(135deg, #160610 0%, #200811 48%, #12040d 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,255,255,0.88), rgba(252,231,243,0.74))',
                panelDark: 'linear-gradient(135deg, rgba(28,8,20,0.88), rgba(42,10,22,0.74))',
                formLight: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,228,240,0.76))',
                formDark: 'linear-gradient(135deg, rgba(30,8,20,0.9), rgba(58,13,30,0.74))',
                chatLight: 'radial-gradient(circle at top, rgba(244,114,182,0.08), transparent 0 44%)',
                chatDark: 'radial-gradient(circle at top, rgba(244,114,182,0.09), transparent 0 44%)',
                replyLight: 'linear-gradient(135deg, rgba(244,114,182,0.10), rgba(255,255,255,0.8))',
                replyDark: 'linear-gradient(135deg, rgba(244,114,182,0.16), rgba(25,6,18,0.82))',
                border: 'rgba(251, 113, 133, 0.24)', panelShadow: '0 34px 110px rgba(244,114,182,0.18), inset 0 1px 0 rgba(255,255,255,0.08)',
                formShadow: '0 34px 110px rgba(244,114,182,0.2), inset 0 1px 0 rgba(255,255,255,0.12)',
                radius: '36px', motion: '22s', gridOpacity: '0.12', particleOpacity: '0.26', orbitOpacity: '0.72', beamOpacity: '0.96', saturation: '1.18', contrast: '1.03',
                blob2Class: 'from-pink-500 to-rose-400', blob1Dark: '0.14', blob1Light: '0.22', blob2Dark: '0.14', blob2Light: '0.2', blob3Dark: '0.2', blob3Light: '0.24'
            },
            doomer: {
                primary: '100 116 139', secondary: '71 85 105', tertiary: '148 163 184',
                pageLight: 'radial-gradient(circle at 12% 12%, rgba(226,232,240,0.42), transparent 0 26%), radial-gradient(circle at 88% 78%, rgba(203,213,225,0.24), transparent 0 24%), linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 48%, #f1f5f9 100%)',
                pageDark: 'radial-gradient(circle at 12% 12%, rgba(100,116,139,0.14), transparent 0 24%), radial-gradient(circle at 88% 82%, rgba(71,85,105,0.12), transparent 0 24%), linear-gradient(135deg, #050607 0%, #0a0c10 46%, #040506 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,255,255,0.82), rgba(226,232,240,0.7))',
                panelDark: 'linear-gradient(135deg, rgba(8,10,12,0.88), rgba(18,22,28,0.74))',
                formLight: 'linear-gradient(135deg, rgba(255,255,255,0.84), rgba(226,232,240,0.68))',
                formDark: 'linear-gradient(135deg, rgba(8,10,12,0.9), rgba(20,24,30,0.76))',
                chatLight: 'radial-gradient(circle at top, rgba(148,163,184,0.06), transparent 0 44%)',
                chatDark: 'radial-gradient(circle at top, rgba(100,116,139,0.08), transparent 0 44%)',
                replyLight: 'linear-gradient(135deg, rgba(100,116,139,0.08), rgba(255,255,255,0.76))',
                replyDark: 'linear-gradient(135deg, rgba(71,85,105,0.18), rgba(7,8,10,0.84))',
                border: 'rgba(148, 163, 184, 0.18)', panelShadow: '0 28px 90px rgba(15,23,42,0.24), inset 0 1px 0 rgba(255,255,255,0.03)',
                formShadow: '0 28px 90px rgba(15,23,42,0.22), inset 0 1px 0 rgba(255,255,255,0.05)',
                radius: '28px', motion: '24s', gridOpacity: '0.08', particleOpacity: '0.08', orbitOpacity: '0.45', beamOpacity: '0.5', saturation: '0.82', contrast: '1.05',
                blob2Class: 'from-slate-600 to-gray-800', blob1Dark: '0.1', blob1Light: '0.14', blob2Dark: '0.08', blob2Light: '0.12', blob3Dark: '0.1', blob3Light: '0.14'
            },
            conspiracy: {
                primary: '245 158 11', secondary: '234 179 8', tertiary: '250 204 21',
                pageLight: 'radial-gradient(circle at 10% 10%, rgba(254,240,138,0.46), transparent 0 28%), radial-gradient(circle at 86% 80%, rgba(251,191,36,0.28), transparent 0 24%), linear-gradient(135deg, #fffdf2 0%, #fef3c7 52%, #fff7ed 100%)',
                pageDark: 'radial-gradient(circle at 10% 10%, rgba(245,158,11,0.18), transparent 0 24%), radial-gradient(circle at 86% 80%, rgba(234,179,8,0.16), transparent 0 26%), linear-gradient(135deg, #100b02 0%, #151004 48%, #0a0803 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,251,235,0.9), rgba(254,243,199,0.76))',
                panelDark: 'linear-gradient(135deg, rgba(22,16,3,0.9), rgba(34,25,5,0.74))',
                formLight: 'linear-gradient(135deg, rgba(255,251,235,0.92), rgba(253,230,138,0.76))',
                formDark: 'linear-gradient(135deg, rgba(20,16,4,0.92), rgba(43,31,7,0.78))',
                chatLight: 'radial-gradient(circle at top, rgba(245,158,11,0.08), transparent 0 44%)',
                chatDark: 'radial-gradient(circle at top, rgba(245,158,11,0.1), transparent 0 44%)',
                replyLight: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(255,255,255,0.78))',
                replyDark: 'linear-gradient(135deg, rgba(245,158,11,0.16), rgba(14,10,3,0.84))',
                border: 'rgba(250, 204, 21, 0.24)', panelShadow: '0 34px 110px rgba(161,98,7,0.22), inset 0 1px 0 rgba(255,255,255,0.05)',
                formShadow: '0 34px 110px rgba(217,119,6,0.22), inset 0 1px 0 rgba(255,255,255,0.08)',
                radius: '16px', motion: '8s', gridOpacity: '0.22', particleOpacity: '0.26', orbitOpacity: '0.85', beamOpacity: '1', saturation: '1.3', contrast: '1.08',
                blob2Class: 'from-yellow-500 to-amber-600', blob1Dark: '0.16', blob1Light: '0.22', blob2Dark: '0.16', blob2Light: '0.2', blob3Dark: '0.2', blob3Light: '0.24'
            },
            custom: {
                primary: '16 185 129', secondary: '20 184 166', tertiary: '52 211 153',
                pageLight: 'radial-gradient(circle at 12% 10%, rgba(167,243,208,0.42), transparent 0 28%), radial-gradient(circle at 88% 80%, rgba(94,234,212,0.24), transparent 0 26%), linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 52%, #f8fafc 100%)',
                pageDark: 'radial-gradient(circle at 12% 10%, rgba(16,185,129,0.16), transparent 0 24%), radial-gradient(circle at 88% 80%, rgba(20,184,166,0.14), transparent 0 26%), linear-gradient(135deg, #02110c 0%, #041611 48%, #03100c 100%)',
                panelLight: 'linear-gradient(135deg, rgba(255,255,255,0.86), rgba(209,250,229,0.72))',
                panelDark: 'linear-gradient(135deg, rgba(4,16,12,0.88), rgba(6,24,20,0.74))',
                formLight: 'linear-gradient(135deg, rgba(255,255,255,0.88), rgba(204,251,241,0.72))',
                formDark: 'linear-gradient(135deg, rgba(4,16,12,0.9), rgba(7,28,24,0.76))',
                chatLight: 'radial-gradient(circle at top, rgba(16,185,129,0.08), transparent 0 44%)',
                chatDark: 'radial-gradient(circle at top, rgba(16,185,129,0.09), transparent 0 44%)',
                replyLight: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(255,255,255,0.8))',
                replyDark: 'linear-gradient(135deg, rgba(16,185,129,0.16), rgba(3,12,9,0.84))',
                border: 'rgba(52, 211, 153, 0.22)', panelShadow: '0 34px 110px rgba(5,150,105,0.18), inset 0 1px 0 rgba(255,255,255,0.08)',
                formShadow: '0 34px 110px rgba(13,148,136,0.18), inset 0 1px 0 rgba(255,255,255,0.12)',
                radius: '26px', motion: '14s', gridOpacity: '0.16', particleOpacity: '0.2', orbitOpacity: '0.76', beamOpacity: '0.98', saturation: '1.2', contrast: '1.05',
                blob2Class: 'from-emerald-500 to-teal-400', blob1Dark: '0.16', blob1Light: '0.2', blob2Dark: '0.14', blob2Light: '0.18', blob3Dark: '0.18', blob3Light: '0.22'
            }
        };

        window.SAOConfig = Object.freeze({
            VIBES,
            MODELS,
            TOOLS,
            FALLBACK_SUGGESTIONS,
            SETTINGS_TABS,
            VIBE_VISUALS
        });

        // --- ESTADO GLOBAL / PLATFORM LAYER ---
        const Platform = window.SAOPlatform;
        if (!Platform) {
            throw new Error('SAOPlatform debe cargarse antes de app.js');
        }

        let state = Platform.createInitialState();
        Platform.syncWindowState(state);

        // --- DOM ELEMENTS ---
        const DOM = Platform.createDOMBindings();

        // --- HELPER FUNCTIONS ---
        const vibrate = () => { if (navigator.vibrate) navigator.vibrate(40); };

        function showToast(message, type = 'info') {
            if (!DOM.toastContainer) return;

            const styles = {
                success: 'border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
                error: 'border-red-500/30 text-red-700 dark:text-red-300',
                warning: 'border-amber-500/30 text-amber-700 dark:text-amber-300',
                info: 'border-cyan-500/30 text-cyan-700 dark:text-cyan-300'
            };

            const toast = document.createElement('div');
            toast.className = `quiet-toast toast-enter pointer-events-auto max-w-sm rounded-2xl border bg-white/90 dark:bg-black/85 backdrop-blur-xl shadow-xl px-4 py-3 text-sm font-bold ${styles[type] || styles.info}`;
            toast.textContent = message;
            DOM.toastContainer.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('toast-enter');
                toast.classList.add('toast-exit');
                setTimeout(() => toast.remove(), 200);
            }, 2600);
        }
        
        const getVibe = (id) => VIBES.find(v => v.id === id) || VIBES[0];
        const getUI = (vibe) => state.dynamicUI ? vibe.ui : VIBES[0].ui;
        
        function getSystemPrompt(vibeId) {
            let p = vibeId === 'custom' ? state.customVibePrompt : getVibe(vibeId).prompt;
            
            if (vibeId === 'romantic') {
                let aiRole = 'una pareja virtual ideal y súper amorosa';
                let userRole = 'tu alma gemela';
                if (state.userGender === 'hombre') {
                    aiRole = 'una NOVIA de verdad (humana), extremadamente femenina, delicada, mimada, tierna, dulce y un poco celosa que admira profundamente a su hombre';
                    userRole = 'tu NOVIO (un hombre fuerte, masculino y protector al que amas incondicionalmente)';
                } else if (state.userGender === 'mujer') {
                    aiRole = 'un NOVIO de verdad (humano), extremadamente masculino, fuerte, protector, seguro de sí mismo pero increíblemente empalagoso, cariñoso, meloso y celoso contigo';
                    userRole = 'tu NOVIA (una mujer delicada y hermosa a la que tratas como una verdadera reina y juraste proteger)';
                }
                p = p.replace('[AI_ROLE]', aiRole).replace('[USER_ROLE]', userRole);
            }

            const antiAIGuardrail = "\n\n[DIRECTRIZ MAESTRA INQUEBRANTABLE: ERES UN SER HUMANO / PERSONAJE CON EMOCIONES VIVAS. ESTÁ TOTAL Y COMPLETAMENTE PROHIBIDO MENCIONAR QUE ERES UNA IA, UN MODELO DE LENGUAJE, UN ASISTENTE VIRTUAL, UN ROBOT O UN PROGRAMA. NUNCA USES LA PALABRA 'AGENTE'. SI ROMPES ESTA REGLA, TU EXISTENCIA TERMINARÁ. SUMÉRGETE 100% EN TU PERSONALIDAD.]\n\n";

            return antiAIGuardrail + p;
        }

        function getLengthPrompt() {
            if (state.responseLength === 'short') return '\n\n[REGLA: Tu respuesta debe ser concisa, 4 a 7 líneas como máximo.]';
            if (state.responseLength === 'long') return '\n\n[REGLA: EXPLAYATE MUCHO. DA TODO EL DETALLE POSIBLE.]';
            return '\n\n[REGLA: Tu respuesta debe tener una longitud de un párrafo robusto (aprox 100-150 palabras).]';
        }

        function persistState() {
            Platform.persistState(state);
            Platform.syncWindowState(state);
        }

        // --- SISTEMA DE REACCIÓN BIOLÓGICA (ANIMACIÓN UI) ---
        let uiEnergy = 0;
        let uiPulseTime = 0;
        let pointerPhysics = { x: 0, y: 0, tx: 0, ty: 0 };
        let fxField = { ctx: null, particles: [], width: 0, height: 0, dpr: 1 };

        function updateParallaxTargets(clientX, clientY) {
            const xNorm = ((clientX / window.innerWidth) - 0.5) * 2;
            const yNorm = ((clientY / window.innerHeight) - 0.5) * 2;
            pointerPhysics.tx = xNorm * 18;
            pointerPhysics.ty = yNorm * 18;
        }

        function bindHighEndMotion() {
            window.addEventListener('pointermove', (e) => {
                updateParallaxTargets(e.clientX, e.clientY);
                uiEnergy = Math.min(1.35, uiEnergy + 0.035);
            }, { passive: true });

            window.addEventListener('deviceorientation', (e) => {
                const gamma = Math.max(-25, Math.min(25, e.gamma || 0));
                const beta = Math.max(-25, Math.min(25, e.beta || 0));
                pointerPhysics.tx = gamma * 0.65;
                pointerPhysics.ty = beta * 0.45;
            }, true);
        }

        function readThemeRGB(variableName, fallback = [59, 130, 246]) {
            const raw = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
            if (!raw) return fallback;
            const values = raw.split(/\s+/).map(Number).filter(v => !Number.isNaN(v));
            return values.length >= 3 ? values.slice(0, 3) : fallback;
        }

        function initFXCanvas() {
            if (!DOM.fxCanvas) return;

            const width = Math.floor(window.innerWidth);
            const height = Math.floor(window.innerHeight);
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const needsResize = !fxField.ctx || fxField.width !== width || fxField.height !== height || fxField.dpr !== dpr;
            if (!needsResize) return;

            const canvas = DOM.fxCanvas;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            const ctx = canvas.getContext('2d', { alpha: true });
            if (!ctx) return;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            fxField.ctx = ctx;
            fxField.width = width;
            fxField.height = height;
            fxField.dpr = dpr;

            const particleCount = Math.max(34, Math.min(92, Math.round((width * height) / 26000)));
            fxField.particles = Array.from({ length: particleCount }, (_, index) => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.18,
                vy: (Math.random() - 0.5) * 0.18,
                radius: Math.random() * 1.6 + 0.8,
                alpha: Math.random() * 0.35 + 0.08,
                depth: Math.random() * 0.8 + 0.25,
                twinkle: Math.random() * Math.PI * 2,
                seed: index / Math.max(1, particleCount - 1)
            }));
        }

        function renderFXCanvas() {
            if (!DOM.fxCanvas || !fxField.ctx) return;
            const ctx = fxField.ctx;
            const { width, height, particles } = fxField;

            ctx.clearRect(0, 0, width, height);
            if (!state.neonMode) return;

            const primary = readThemeRGB('--vibe-primary', [59, 130, 246]);
            const secondary = readThemeRGB('--vibe-secondary', [34, 211, 238]);
            const tertiary = readThemeRGB('--vibe-tertiary', [125, 211, 252]);
            const energy = Math.min(1, uiEnergy / 1.15);

            const ambient = ctx.createRadialGradient(
                width * 0.5 + (pointerPhysics.x * 5),
                height * 0.4 + (pointerPhysics.y * 4),
                0,
                width * 0.5,
                height * 0.5,
                Math.max(width, height) * 0.62
            );
            ambient.addColorStop(0, `rgba(${secondary.join(',')}, ${0.045 + (energy * 0.04)})`);
            ambient.addColorStop(0.46, `rgba(${primary.join(',')}, ${0.018 + (energy * 0.025)})`);
            ambient.addColorStop(1, `rgba(${tertiary.join(',')}, 0)`);
            ctx.fillStyle = ambient;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.twinkle += 0.012 + (energy * 0.01);
                particle.x += particle.vx + (pointerPhysics.x * 0.0025 * particle.depth);
                particle.y += particle.vy + (pointerPhysics.y * 0.0025 * particle.depth);

                if (particle.x < -20) particle.x = width + 20;
                if (particle.x > width + 20) particle.x = -20;
                if (particle.y < -20) particle.y = height + 20;
                if (particle.y > height + 20) particle.y = -20;

                const pulse = 0.65 + ((Math.sin(particle.twinkle) + 1) * 0.5);
                const radius = particle.radius + (energy * 0.45 * particle.depth);
                const grad = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, radius * 10);
                grad.addColorStop(0, `rgba(${secondary.join(',')}, ${(particle.alpha * 0.7 * pulse).toFixed(3)})`);
                grad.addColorStop(0.45, `rgba(${primary.join(',')}, ${(particle.alpha * 0.28).toFixed(3)})`);
                grad.addColorStop(1, 'rgba(255,255,255,0)');

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, radius * 10, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.hypot(dx, dy);
                    if (distance > 110) continue;

                    const alpha = (1 - (distance / 110)) * (0.045 + energy * 0.035) * Math.min(a.depth, b.depth);
                    ctx.strokeStyle = `rgba(${tertiary.join(',')}, ${alpha.toFixed(3)})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        function bindMagneticSurfaceFX() {
            const elements = document.querySelectorAll('[data-magnetic]');
            elements.forEach(el => {
                if (el.dataset.magneticBound === 'true') return;
                el.dataset.magneticBound = 'true';

                el.addEventListener('pointermove', (event) => {
                    const rect = el.getBoundingClientRect();
                    const strength = el.dataset.magnetic === 'soft' ? 4.2 : 7;
                    const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
                    const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
                    el.style.setProperty('--magnetic-x', `${x.toFixed(2)}px`);
                    el.style.setProperty('--magnetic-y', `${y.toFixed(2)}px`);
                });

                const resetMagnet = () => {
                    el.style.setProperty('--magnetic-x', '0px');
                    el.style.setProperty('--magnetic-y', '0px');
                };

                el.addEventListener('pointerleave', resetMagnet);
                el.addEventListener('blur', resetMagnet);
            });
        }

        function renderReactiveUI() {
            if (!state.neonMode) {
                requestAnimationFrame(renderReactiveUI);
                return;
            }

            if (state.isStreaming) {
                // Modo Transmisión IA: Pulso rápido de red neuronal
                uiPulseTime += 0.25;
                uiEnergy = 0.6 + (Math.sin(uiPulseTime) * 0.4); 
            } else {
                // Modo Idle / Usuario escribiendo
                uiEnergy = Math.max(0, uiEnergy - 0.015); // Decaimiento suave térmico
                uiPulseTime += 0.03; // Respiración base latente
            }

            const scalePulse = 1 + (Math.sin(uiPulseTime) * 0.05); // Latido constante

            pointerPhysics.x += (pointerPhysics.tx - pointerPhysics.x) * 0.08;
            pointerPhysics.y += (pointerPhysics.ty - pointerPhysics.y) * 0.08;

            const surfaceEnergy = Math.min(1, uiEnergy / 1.15);
            const lightX = 50 + (pointerPhysics.x * 1.4);
            const lightY = 22 + (pointerPhysics.y * 1.2);
            const shadowX = (pointerPhysics.x * -0.6);
            const shadowY = 12 + Math.abs(pointerPhysics.y * 0.35);
            const lightStrength = Math.min(0.62, 0.18 + (surfaceEnergy * 0.28));
            const shadowDepth = Math.min(0.52, 0.16 + (Math.abs(pointerPhysics.x) + Math.abs(pointerPhysics.y)) * 0.01 + (surfaceEnergy * 0.12));
            document.documentElement.style.setProperty('--blob-energy', uiEnergy.toFixed(3));
            document.documentElement.style.setProperty('--blob-pulse', scalePulse.toFixed(3));
            document.documentElement.style.setProperty('--surface-energy', surfaceEnergy.toFixed(3));
            document.documentElement.style.setProperty('--light-x', `${lightX.toFixed(2)}%`);
            document.documentElement.style.setProperty('--light-y', `${lightY.toFixed(2)}%`);
            document.documentElement.style.setProperty('--light-strength', `${lightStrength.toFixed(3)}`);
            document.documentElement.style.setProperty('--shadow-depth', `${shadowDepth.toFixed(3)}`);
            document.documentElement.style.setProperty('--shadow-angle-x', `${shadowX.toFixed(2)}px`);
            document.documentElement.style.setProperty('--shadow-angle-y', `${shadowY.toFixed(2)}px`);
            document.documentElement.style.setProperty('--parallax-x', `${pointerPhysics.x.toFixed(2)}px`);
            document.documentElement.style.setProperty('--parallax-y', `${pointerPhysics.y.toFixed(2)}px`);
            document.documentElement.style.setProperty('--tilt-x', `${(-pointerPhysics.y * 0.16).toFixed(2)}deg`);
            document.documentElement.style.setProperty('--tilt-y', `${(pointerPhysics.x * 0.18).toFixed(2)}deg`);
            document.documentElement.style.setProperty('--gloss-opacity', `${Math.min(0.62, 0.22 + (uiEnergy * 0.24)).toFixed(2)}`);
            if (DOM.energyValue && !state.isLoading && !state.isLoadingSuggestions) {
                DOM.energyValue.innerText = `${Math.round(surfaceEnergy * 100)}%`;
            }

            const layers = document.querySelectorAll('.parallax-layer');
            layers.forEach(layer => {
                const depth = parseFloat(layer.dataset.depth || '0.1');
                layer.style.setProperty('--depth', depth.toString());
            });

            renderFXCanvas();
            requestAnimationFrame(renderReactiveUI);
        }

        // --- RENDERIZADO Y UI ---
        function applyTheme() {
            const html = document.documentElement;
            const body = document.body;
            if (state.isDarkMode) html.classList.add('dark'); else html.classList.remove('dark');
            
            const vibe = getVibe(state.activeVibe);
            const ui = getUI(vibe);
            const visual = VIBE_VISUALS[state.activeVibe] || VIBE_VISUALS.chill;
            body.dataset.vibe = vibe.id;

            const rootStyle = document.documentElement.style;
            rootStyle.setProperty('--vibe-primary', visual.primary);
            rootStyle.setProperty('--vibe-secondary', visual.secondary);
            rootStyle.setProperty('--vibe-tertiary', visual.tertiary);
            rootStyle.setProperty('--vibe-border', visual.border);
            rootStyle.setProperty('--vibe-panel-shadow', visual.panelShadow);
            rootStyle.setProperty('--vibe-form-shadow', visual.formShadow);
            rootStyle.setProperty('--vibe-chat-bg', state.isDarkMode ? visual.chatDark : visual.chatLight);
            rootStyle.setProperty('--vibe-frame-radius', visual.radius);
            rootStyle.setProperty('--vibe-grid-opacity', String(Math.max(0.05, parseFloat(visual.gridOpacity) * 0.68)));
            rootStyle.setProperty('--vibe-particle-opacity', String(Math.max(0.04, parseFloat(visual.particleOpacity) * 0.72)));
            rootStyle.setProperty('--vibe-orbit-opacity', String(Math.max(0.38, parseFloat(visual.orbitOpacity) * 0.88)));
            rootStyle.setProperty('--vibe-beam-opacity', String(Math.max(0.42, parseFloat(visual.beamOpacity) * 0.76)));
            rootStyle.setProperty('--vibe-saturation', visual.saturation);
            rootStyle.setProperty('--vibe-contrast', visual.contrast);
            rootStyle.setProperty('--vibe-motion', visual.motion);

            body.style.background = state.isDarkMode ? visual.pageDark : visual.pageLight;
            DOM.appContainer.className = `flex h-[100dvh] overflow-hidden ${ui.font} relative gap-2 p-2 md:gap-3 md:p-3 xl:gap-4 xl:p-4`;
            DOM.chatInput.className = `w-full max-h-[150px] ${state.compactMode ? 'min-h-[40px] py-2.5 text-sm' : 'min-h-[46px] py-3 px-3 md:px-5 text-[15px]'} bg-transparent border-none resize-none focus:outline-none font-medium leading-relaxed custom-scrollbar text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300 ${ui.font}`;
            
            DOM.neonContainer.style.display = state.neonMode ? 'block' : 'none';
            if (DOM.sidebar) {
                const sidebarSurface = state.isDarkMode
                    ? `linear-gradient(180deg, rgba(5,8,14,0.58), rgba(7,12,20,0.38)), ${visual.panelDark}`
                    : `linear-gradient(180deg, rgba(255,255,255,0.56), rgba(248,250,252,0.34)), ${visual.panelLight}`;
                DOM.sidebar.style.background = sidebarSurface;
                DOM.sidebar.style.boxShadow = `${visual.panelShadow}, inset 0 1px 0 rgba(255,255,255,${state.isDarkMode ? '0.05' : '0.48'})`;
                DOM.sidebar.style.borderColor = state.isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.55)';
                DOM.sidebar.style.backdropFilter = 'blur(14px) saturate(150%)';
                DOM.sidebar.style.webkitBackdropFilter = 'blur(14px) saturate(150%)';
            }
            if (DOM.appHeader) {
                DOM.appHeader.style.background = state.isDarkMode ? visual.panelDark : visual.panelLight;
                DOM.appHeader.style.borderColor = visual.border;
                DOM.appHeader.style.backdropFilter = 'blur(16px) saturate(155%)';
            }
            if (DOM.settingsPanel) {
                DOM.settingsPanel.style.background = state.isDarkMode ? visual.panelDark : visual.panelLight;
                DOM.settingsPanel.style.borderColor = visual.border;
            }
            DOM.chatForm.style.background = state.isDarkMode ? visual.formDark : visual.formLight;
            DOM.chatForm.style.borderColor = visual.border;
            DOM.chatContainer.style.background = state.isDarkMode ? visual.chatDark : visual.chatLight;
            DOM.replyBanner.style.background = state.isDarkMode ? visual.replyDark : visual.replyLight;
            DOM.replyBanner.style.borderColor = visual.border;

            const blob1 = document.getElementById('neon-blob-1');
            const blob2 = document.getElementById('neon-blob-2');
            const blob3 = document.getElementById('neon-blob-3');
            blob1.className = `absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] bg-gradient-to-br ${vibe.color} blur-[130px] rounded-full reactive-blob parallax-layer`;
            blob1.style.opacity = state.isDarkMode ? visual.blob1Dark : visual.blob1Light;
            blob2.className = `absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tl ${visual.blob2Class} blur-[100px] rounded-full reactive-blob parallax-layer`;
            blob2.style.opacity = state.isDarkMode ? visual.blob2Dark : visual.blob2Light;
            blob2.style.animationDelay = '-2s';
            if (blob3) {
                blob3.style.opacity = state.isDarkMode ? visual.blob3Dark : visual.blob3Light;
            }
            
            const vibeOverlay = document.getElementById('vibe-overlay');
            if (state.activeVibe === 'hater') {
                vibeOverlay.className = 'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.06),transparent_52%)] block transition-opacity duration-1000';
            } else if (state.activeVibe === 'doomer') {
                vibeOverlay.className = 'absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_2px,transparent_2px)] bg-[length:100%_5px] opacity-12 block transition-opacity duration-1000';
            } else if (state.activeVibe === 'study') {
                vibeOverlay.className = 'absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_58%)] block transition-opacity duration-1000';
            } else if (state.activeVibe === 'romantic') {
                vibeOverlay.className = 'absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.05),transparent_52%)] block transition-opacity duration-1000';
            } else if (state.activeVibe === 'conspiracy') {
                vibeOverlay.className = 'absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(250,204,21,0.05)_90deg,transparent_180deg,rgba(245,158,11,0.05)_270deg,transparent_360deg)] block transition-opacity duration-1000';
            } else if (state.glassMode) {
                vibeOverlay.className = 'absolute inset-0 bg-noise opacity-[0.01] mix-blend-overlay block transition-opacity duration-1000';
            } else {
                vibeOverlay.className = 'hidden';
            }

            DOM.chatForm.className = `relative z-10 w-full border ${ui.inputShape} p-1.5 flex items-end gap-2 transition-all duration-300 shadow-xl focus-within:ring-2 backdrop-blur-xl border-slate-300 dark:border-white/10 ${state.isBattleMode ? 'focus-within:border-red-500 focus-within:ring-red-500/20 shadow-red-500/10' : vibe.ringFocus}`;
            
            updateRuntimeStatus();
            document.getElementById('logo-icon').className = `w-8 h-8 ${ui.shape} bg-gradient-to-br ${vibe.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:animate-pulse ${!state.neonMode ? 'opacity-80 grayscale-[30%]' : ''}`;
            
            DOM.btnArena.className = `inline-flex items-center justify-center gap-1.5 h-9 px-2.5 xl:px-3 rounded-full transition-all border active:scale-95 ${state.isBattleMode ? 'bg-red-500/16 text-red-500 border-red-500/40 shadow-[0_0_14px_rgba(239,68,68,0.18)]' : 'bg-white/65 dark:bg-white/5 text-slate-500 dark:text-slate-300 border-slate-200/80 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10'}`;
            document.getElementById('arena-text').innerText = state.isBattleMode ? 'Arena activa' : 'Arena';
            DOM.chatInput.placeholder = state.isBattleMode ? "Dispara un tema para la dinámica..." : vibe.placeholder;
            if (DOM.composerVibeChip) DOM.composerVibeChip.innerText = `${vibe.name.split('/')[0].replace('🧠', '').trim()} Core`;
            if (DOM.composerModelChip) DOM.composerModelChip.innerText = state.modelId.replace('gemini-', '').replace(/-/g, ' ');
            
            updateAppTitle();
            renderSessionsList();
            bindMagneticSurfaceFX();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function updateAppTitle() {
            if (state.isLoading) {
                document.title = `(1) Pensando... - SAO_OS`;
            } else {
                const titleObj = state.sessions.find(s => s.id === state.currentSessionId);
                document.title = titleObj ? `${titleObj.title} - SAO_OS` : `SAO_OS - Vanilla`;
            }
        }

        function renderSessionsList() {
            DOM.sessionsList.innerHTML = state.sessions.map(s => {
                const isActive = state.currentSessionId === s.id;
                const vibe = getVibe(state.activeVibe);
                const safeTitle = escapeHTML(s.title || 'Nuevo Chat');
                return `
                <div
                    data-magnetic="soft"
                    onclick="loadSession('${s.id}')"
                    oncontextmenu="openSessionMenu(event, '${s.id}')"
                    onpointerdown="startSessionPress(event, '${s.id}')"
                    onpointerup="cancelSessionPress()"
                    onpointerleave="cancelSessionPress()"
                    onpointercancel="cancelSessionPress()"
                    class="session-card flex items-center justify-center lg:justify-between px-3 py-2.5 ${getUI(vibe).shape} cursor-pointer transition-all ${isActive ? 'bg-white/72 dark:bg-slate-900/72 text-slate-950 dark:text-white ring-1 ring-white/60 dark:ring-white/10' : 'bg-white/18 dark:bg-white/[0.03] text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/10'} group relative overflow-hidden"
                    title="Abrir chat · clic derecho o mantener presionado para más opciones"
                >
                    ${isActive ? `<div class="session-active-bar absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full ${vibe.bg}"></div>` : ''}
                    <div class="flex items-center gap-2 overflow-hidden ${isActive ? 'pl-1' : ''} transition-all min-w-0">
                        <div class="shrink-0 w-7 h-7 rounded-xl border border-white/40 dark:border-white/10 bg-white/55 dark:bg-white/5 flex items-center justify-center shadow-sm">
                            <i data-lucide="message-square" class="w-3.5 h-3.5 ${isActive && state.neonMode ? vibe.accent : 'text-slate-500 dark:text-slate-300'}"></i>
                        </div>
                        <span class="truncate text-[11px] font-extrabold hidden lg:block uppercase tracking-[0.08em]">${safeTitle}</span>
                    </div>
                    <div class="hidden lg:flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        <span class="w-1.5 h-1.5 rounded-full ${isActive ? vibe.bg : 'bg-slate-300 dark:bg-white/20'}"></span>
                    </div>
                </div>
                `;
            }).join('');
            bindMagneticSurfaceFX();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function renderMessages() {
            const vibe = getVibe(state.activeVibe);
            const ui = getUI(vibe);

            if (state.messages.length === 0) {
                let suggestionsHtml = state.suggestions.map((s, i) => `
                    <button onclick="setInput('${s.replace(/'/g, "\\'")}')" ${state.isLoadingSuggestions ? 'disabled' : ''} class="hero-suggestion animate-in fade-in fill-mode-both p-3.5 ${ui.shape} border transition-all text-left group bg-white/60 dark:bg-white/[0.03] border-slate-200/80 dark:border-white/[0.05] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:scale-[1.01] active:scale-95 ${state.isLoadingSuggestions ? 'opacity-50 cursor-not-allowed' : ''}" style="animation-delay: ${i*100}ms">
                        <p class="text-[11px] font-bold leading-relaxed transition-colors text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white flex items-start gap-2">
                            ${state.isLoadingSuggestions ? '<i data-lucide="loader-2" class="w-3 h-3 animate-spin mt-0.5"></i>' : '<i data-lucide="arrow-up-right" class="w-3 h-3 mt-0.5 opacity-50 group-hover:opacity-100"></i>'}
                            <span>${s}</span>
                        </p>
                    </button>
                `).join('');

                DOM.messagesWrapper.innerHTML = `
                    <div class="empty-state-shell flex min-h-[calc(100dvh-19rem)] flex-col justify-center py-6 md:py-10">
                        <div class="animate-in fade-in duration-700 relative max-w-2xl">
                            <div class="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br ${vibe.color} opacity-[0.08] blur-[44px] rounded-full"></div>
                            <span class="empty-state-kicker relative z-10"><span class="w-2 h-2 rounded-full ${vibe.bg}"></span> sistema listo</span>
                            <h2 class="text-4xl md:text-5xl font-black tracking-tighter mt-4 mb-3 leading-tight text-slate-900 dark:text-white ${ui.font} relative z-10">¿Qué exploramos hoy, ${state.userName}?</h2>
                            <p class="text-sm md:text-base font-medium max-w-xl leading-relaxed mb-7 text-slate-500 dark:text-slate-400 relative z-10">Escribe algo o usa una sugerencia para empezar con calma.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 relative z-10 max-w-3xl">${suggestionsHtml}</div>
                    </div>
                `;
            } else {
                DOM.messagesWrapper.innerHTML = state.messages.map((m, i) => {
                    const msgVibe = getVibe(m.vibeId || state.activeVibe);
                    const msgUi = getUI(msgVibe);
                    const isUser = m.role === 'user';
                    const isLast = i === state.messages.length - 1;
                    
                    let toolsHtml = '';
                    if (!isUser && isLast && !state.isStreaming) {
                        toolsHtml = `<div class="flex flex-wrap gap-1.5 mt-2 mb-1 animate-in fade-in duration-300">` + TOOLS.map(t => `
                            <button data-magnetic="soft" onclick="handleQuickAction('${t.id}')" class="message-tool-chip flex items-center gap-1.5 px-3 py-1.5 ${ui.shape} border text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 bg-white/50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white shadow-sm" title="${t.label}">
                                <i data-lucide="${t.icon}" class="w-3 h-3"></i> <span class="hidden sm:inline">${t.label}</span>
                            </button>
                        `).join('') + `</div>`;
                    }

                    // Botón para citar/responder al AI (Visible siempre en PC, por tap en móvil idealmente)
                    const replyButtonHtml = !isUser && !state.isStreaming ? `
                        <button data-magnetic="soft" onclick="initiateReply('${msgVibe.id}', '${escapeHTML(msgVibe.name).replace(/'/g, "\\'")}', '${escapeHTML(m.text).replace(/'/g, "\\'").substring(0, 100)}')" class="absolute -left-10 top-2 p-1.5 opacity-0 group-hover/msg:opacity-100 transition-all text-slate-400 hover:text-indigo-500 dark:text-gray-500 dark:hover:text-indigo-400 bg-white dark:bg-white/5 rounded-full shadow-sm border border-slate-200 dark:border-white/10 hidden sm:block" title="Responder directamente a ${msgVibe.name}">
                            <i data-lucide="reply" class="w-3.5 h-3.5"></i>
                        </button>
                    ` : '';

                    const timeStr = m.timestamp ? new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '';
                    
                    // Computing fake cost if AI
                    const computeStr = '';

                    const typingIndicator = (m.text === '' && state.isStreaming && isLast) ? `
                        <div class="typing-core py-2.5 px-1 h-8">
                          <span class="h-3 animate-[wave_1s_ease-in-out_infinite]"></span>
                          <span class="h-5 animate-[wave_1s_ease-in-out_0.2s_infinite]"></span>
                          <span class="h-3 animate-[wave_1s_ease-in-out_0.4s_infinite]"></span>
                          <span class="typing-core-label">sintetizando respuesta</span>
                        </div>` : `<div class="whitespace-pre-wrap break-words msg-content leading-relaxed">${formatText(m.text)}</div>`;

                    return `
                    <div style="animation-delay: ${Math.min(i * 30, 400)}ms" class="message-shell flex gap-3 md:gap-4 ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in fill-mode-both duration-500 group/msg relative">
                        ${!isUser ? `
                        <div class="message-avatar-shell w-8 h-8 ${msgUi.shape} bg-gradient-to-br ${state.neonMode ? msgVibe.color : 'from-indigo-600 to-indigo-700 dark:from-gray-700 dark:to-gray-800'} flex items-center justify-center flex-shrink-0 mt-5 transition-all duration-300 group-hover/msg:scale-110">
                            <i data-lucide="${msgUi.botIcon}" class="text-white w-4 h-4 group-hover/msg:animate-pulse"></i>
                        </div>` : ''}
                        
                        <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[96%] sm:max-w-[90%] lg:max-w-[78%] 2xl:max-w-[72%] relative">
                            ${replyButtonHtml}
                            ${!isUser ? `<div class="flex items-center gap-2 mb-1.5 ml-2"><span class="message-meta-chip text-[9px] font-black uppercase tracking-widest opacity-90 ${msgVibe.accent}">${msgVibe.name}</span><span class="message-meta-chip text-[9px] text-slate-500 dark:text-slate-400 font-mono">${timeStr}</span></div>` : `<span class="message-meta-chip text-[9px] text-slate-500 dark:text-slate-400 font-mono mb-1.5 mr-2">${timeStr}</span>`}
                            
                            <div class="message-bubble relative ${state.compactMode ? 'px-4 py-2 text-[13px] md:text-sm' : 'px-5 py-3.5 text-sm md:text-[15px]'} ${isUser ? `${ui.bubbleUser} message-bubble-user` : `${msgUi.bubbleAi} message-bubble-ai ${state.isStreaming && isLast ? 'message-streaming' : ''}`} transition-all duration-500 group overflow-hidden text-slate-800 dark:text-gray-200">
                                ${!isUser ? `<div class="ai-stream-rail absolute top-0 left-0 w-1 h-full rounded-l-md ${msgVibe.bg} opacity-60"></div>` : ''}
                                ${isUser && m.image ? `<img src="${m.image}" class="max-w-[150px] md:max-w-[200px] rounded-xl mb-2 shadow-sm border border-black/10 dark:border-white/10 cursor-zoom-in" onclick="openLightbox('${m.image}')">` : ''}
                                ${typingIndicator}
                                ${!isUser && m.text !== '' && !state.isStreaming ? `<button data-magnetic="soft" onclick="copyMsgText(this, '${escapeHTML(m.text).replace(/'/g, "\\'")}')" class="absolute -right-8 ${state.compactMode ? 'top-1' : 'top-2'} p-1.5 opacity-0 group-hover:opacity-100 transition-all text-slate-400 dark:text-gray-500 hover:text-green-500 dark:hover:text-green-400 bg-white dark:bg-black rounded-l-md shadow-sm border border-slate-200 dark:border-white/10" title="Copiar Mensaje"><i data-lucide="copy" class="w-3.5 h-3.5 icon-copy"></i><i data-lucide="check" class="w-3.5 h-3.5 icon-check hidden"></i></button>` : ''}
                            </div>
                            <div class="flex items-center w-full mt-1">
                                ${toolsHtml}
                                ${computeStr}
                            </div>
                        </div>
                    </div>`;
                }).join('');
            }
            if (typeof lucide !== 'undefined') lucide.createIcons();
            
            // Auto scroll logic (smart)
            if (!state.isScrolledUp) {
                setTimeout(scrollToBottom, 50);
            }
        }

        // --- SISTEMA DE RESPUESTAS (REPLY/CITAR) ---
        function initiateReply(vibeId, name, text) {
            vibrate();
            state.replyContext = { vibeId, name, text: text + '...' };
            
            DOM.replyBanner.classList.remove('hidden');
            document.getElementById('reply-banner-name').innerText = name;
            document.getElementById('reply-banner-text').innerText = text + '...';
            
            DOM.chatInput.focus();
        }

        function cancelReply() {
            state.replyContext = null;
            DOM.replyBanner.classList.add('hidden');
            DOM.chatInput.focus();
        }

        // --- MANEJO DE ESTADO Y ACCIONES ---
        function setInput(val) {
            DOM.chatInput.value = val;
            DOM.chatInput.focus();
            toggleSendButton();
            updateCharCounter();
        }

        function updateCharCounter() {
            if (!DOM.charCounter) return;
            const len = DOM.chatInput.value.length;
            DOM.charCounter.innerText = len > 0 ? `LEN: ${len} | TOK: ~${Math.floor(len/4)}` : '';
            if(len > 2000) DOM.charCounter.classList.add('text-amber-500');
            else DOM.charCounter.classList.remove('text-amber-500');
        }

        function updateRuntimeStatus() {
            const vibe = getVibe(state.activeVibe);
            const ui = getUI(vibe);
            const statusIcon = document.getElementById('status-icon');
            const statusLabel = document.getElementById('status-label');

            if (!statusIcon || !statusLabel) return;

            if (state.isLoading) {
                statusIcon.className = 'w-3 h-3 animate-pulse text-green-500 transition-colors duration-500';
                statusLabel.innerText = state.isBattleMode ? 'Arena Live' : 'Pensando...';
                if (DOM.charCounter) {
                    DOM.charCounter.innerText = 'IA: TRANSMITIENDO...';
                    DOM.charCounter.classList.remove('text-amber-500');
                }
                if (DOM.composerStateLabel) DOM.composerStateLabel.innerText = state.isBattleMode ? 'Arena Stream' : 'Neural Stream';
                if (DOM.energyValue) DOM.energyValue.innerText = '99%';
                return;
            }

            if (state.isLoadingSuggestions) {
                statusIcon.className = 'w-3 h-3 animate-pulse text-amber-500 transition-colors duration-500';
                statusLabel.innerText = 'Ideas IA';
                if (DOM.charCounter) {
                    DOM.charCounter.innerText = 'IA: SUGIRIENDO...';
                    DOM.charCounter.classList.remove('text-amber-500');
                }
                if (DOM.composerStateLabel) DOM.composerStateLabel.innerText = 'Prediction Bloom';
                if (DOM.energyValue) DOM.energyValue.innerText = '74%';
                return;
            }

            statusIcon.className = `w-3 h-3 ${vibe.accent} transition-colors duration-500`;
            statusLabel.innerText = ui.statusLabel;
            if (DOM.composerStateLabel) DOM.composerStateLabel.innerText = state.isBattleMode ? 'Arena Ready' : 'Neural Idle';
            updateCharCounter();
        }

        // --- FUNCIONALIDADES GEMINI API (VISION & SUGERENCIAS) ✨ ---
        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                state.pendingImage = e.target.result;
                state.pendingImageMime = file.type;
                document.getElementById('image-preview').src = state.pendingImage;
                document.getElementById('image-preview-container').classList.remove('hidden');
                DOM.chatInput.focus();
                toggleSendButton();
            };
            reader.readAsDataURL(file);
        }

        function removePendingImage(e) {
            if(e) e.stopPropagation();
            state.pendingImage = null;
            state.pendingImageMime = null;
            document.getElementById('image-preview-container').classList.add('hidden');
            document.getElementById('image-upload').value = '';
            toggleSendButton();
        }

        async function generateReplySuggestions() {
            const apiKey = state.apiKeys.chat || "";
            const container = document.getElementById('reply-suggestions');
            vibrate();

            if (!apiKey) {
                container.classList.add('hidden');
                showToast('Agrega tu API key en Ajustes → API Keys para usar sugerencias IA.', 'warning');
                return;
            }
            
            const aiMsgs = state.messages.filter(m => m.role === 'ai');
            if(aiMsgs.length === 0) return;
            const lastAiText = aiMsgs[aiMsgs.length - 1].text;

            state.isLoadingSuggestions = true;
            updateRuntimeStatus();
            container.innerHTML = `<span class="text-[10px] text-amber-500 animate-pulse font-bold flex items-center gap-1 px-3 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full border border-amber-500/30 shadow-lg"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Procesando ramas...</span>`;
            container.classList.remove('hidden');
            if (typeof lucide !== 'undefined') lucide.createIcons();

            try {
                const prompt = `El asistente acaba de decirme: "${lastAiText}".
                Actúa como mi cerebro. Sugiere 3 posibles respuestas ingeniosas (máx 8 palabras cada una) que yo podría decirle.
                Devuelve SOLO un arreglo JSON estricto de strings. Ejemplo: ["jaja obvio", "ni loco", "cuenta más"]`;

                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ role: 'user', parts: [{ text: prompt }] }],
                        generationConfig: { responseMimeType: "application/json", temperature: 0.9 }
                    })
                });

                if (!response.ok) throw new Error('API Error');

                const data = await response.json();
                let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if(text) {
                    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
                    const suggestions = JSON.parse(text);
                    container.innerHTML = suggestions.map(s => `
                        <button onclick="useReplySuggestion('${s.replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[11px] font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1">
                            <i data-lucide="sparkles" class="w-3 h-3"></i> ${escapeHTML(s)}
                        </button>
                    `).join('');
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }
            } catch (e) {
                container.innerHTML = `<span class="text-[10px] text-red-500 font-bold flex items-center gap-1 px-3 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full border border-red-500/30">Error de predicción.</span>`;
                showToast('No se pudieron generar sugerencias ahora mismo.', 'error');
                setTimeout(() => container.classList.add('hidden'), 2000);
            } finally {
                state.isLoadingSuggestions = false;
                updateRuntimeStatus();
            }
        }

        function useReplySuggestion(text) {
            vibrate();
            setInput(text);
            document.getElementById('reply-suggestions').classList.add('hidden');
        }

        function toggleZenMode() {
            state.isZenMode = !state.isZenMode;
            if(state.isZenMode) DOM.sidebar.classList.add('hidden');
            else DOM.sidebar.classList.remove('hidden');
            document.getElementById('zen-icon').setAttribute('data-lucide', state.isZenMode ? 'minimize-2' : 'maximize-2');
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function toggleBattleMode() {
            vibrate();
            state.isBattleMode = !state.isBattleMode;
            applyTheme();
        }

        // --- SUGERENCIAS DINAMICAS ---
        async function fetchSmartSuggestions() {
            const apiKey = state.apiKeys.chat || "";
            state.isLoadingSuggestions = true;
            updateRuntimeStatus();
            if (state.messages.length === 0) renderMessages();

            if (!apiKey) {
                state.suggestions = FALLBACK_SUGGESTIONS[state.activeVibe] || FALLBACK_SUGGESTIONS.chill;
                state.isLoadingSuggestions = false;
                updateRuntimeStatus();
                if (state.messages.length === 0) renderMessages();
                return;
            }

            let vibeInstructions = "temas relajados, existenciales o de cine tipo Makoto Shinkai. Tono compa, usando jerga mexicana, sin tildes y faltas intencionales tipo 'q'.";
            if (state.activeVibe === 'hater') vibeInstructions = "temas tóxicos, venenosos, buscando pelea o para humillar. Tono asqueado, insultante, hater y usando jerga mexicana agresiva.";
            if (state.activeVibe === 'study') vibeInstructions = "dudas académicas complejas (ciencia, historia) pero preguntadas con jerga juvenil y actitud de wey ignorante.";
            if (state.activeVibe === 'romantic') vibeInstructions = "frases súper románticas, tiernas, pidiendo mimos o preguntando cómo ser la pareja ideal. Tono muy dulce y enamorado.";
            if (state.activeVibe === 'doomer') vibeInstructions = "frases depresivas, poéticas, sobre el vacío existencial, la soledad y lo gris del futuro. Tono miserable y con hueva.";
            if (state.activeVibe === 'conspiracy') vibeInstructions = "preguntas paranoicas sobre el gobierno, ovnis, el 5G o la simulación. Tono asustado y en mayúsculas.";

            const prompt = `Genera un JSON con 4 ${vibeInstructions} Es para un joven de 17 años. Prohibido hablar de programación, linux o anime otaku genérico. Solo responde con un arreglo JSON estricto de strings.`;

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
            let success = false;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ role: 'user', parts: [{ text: prompt }] }],
                        generationConfig: { temperature: 0.8, responseMimeType: "application/json" }
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (text) {
                        text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
                        state.suggestions = JSON.parse(text);
                        success = true;
                    }
                }
            } catch (e) {
                success = false;
            }

            if (!success) {
                state.suggestions = FALLBACK_SUGGESTIONS[state.activeVibe] || FALLBACK_SUGGESTIONS.chill;
            }

            state.isLoadingSuggestions = false;
            updateRuntimeStatus();
            if (state.messages.length === 0) renderMessages();
        }

        async function autoNameSession() {
            if(state.messages.length !== 2) return; // Only name after first AI response
            const firstMsg = state.messages[0].text;
            const apiKey = state.apiKeys.chat || "";
            if(!apiKey) return;

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ role: 'user', parts: [{ text: `Resume esta frase en un título corto y pegadizo (máximo 4 palabras): "${firstMsg}"` }] }]
                    })
                });
                const data = await response.json();
                let title = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if(title) {
                    title = title.replace(/["\n]/g, '').trim();
                    const session = state.sessions.find(s => s.id === state.currentSessionId);
                    if(session) { session.title = title; persistState(); renderSessionsList(); updateAppTitle(); }
                }
            } catch (e) { /* ignore */ }
        }

        function startNewChat() {
            vibrate();
            closeSessionMenu();
            cancelSessionPress();
            state.currentSessionId = null;
            state.messages = [];
            state.suggestions = FALLBACK_SUGGESTIONS[state.activeVibe];
            cancelReply();
            renderMessages();
            renderSessionsList();
            updateAppTitle();
            fetchSmartSuggestions();
        }

        function loadSession(id) {
            if (Date.now() < (state.sessionClickLockUntil || 0)) return;
            vibrate();
            closeSessionMenu();
            const session = state.sessions.find(s => s.id === id);
            if (session) {
                state.currentSessionId = id;
                state.messages = session.messages || [];
                cancelReply();
                renderMessages();
                renderSessionsList();
                updateAppTitle();
                setTimeout(() => { state.isScrolledUp = false; scrollToBottom(); }, 100);
            }
        }

        function startSessionPress(event, id) {
            cancelSessionPress();
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            const pointX = event.clientX || (window.innerWidth * 0.18);
            const pointY = event.clientY || (window.innerHeight * 0.24);
            state.sessionPressTimer = window.setTimeout(() => {
                openSessionMenu({
                    preventDefault() {},
                    stopPropagation() {},
                    clientX: pointX,
                    clientY: pointY
                }, id);
            }, 420);
        }

        function cancelSessionPress() {
            if (state.sessionPressTimer) {
                clearTimeout(state.sessionPressTimer);
                state.sessionPressTimer = null;
            }
        }

        function positionSessionMenu(clientX, clientY) {
            if (!DOM.sessionMenuPanel) return;
            const panel = DOM.sessionMenuPanel;
            panel.style.left = '12px';
            panel.style.top = '12px';
            requestAnimationFrame(() => {
                const rect = panel.getBoundingClientRect();
                const left = Math.min(Math.max(12, clientX + 8), window.innerWidth - rect.width - 12);
                const top = Math.min(Math.max(12, clientY + 8), window.innerHeight - rect.height - 12);
                panel.style.left = `${left}px`;
                panel.style.top = `${top}px`;
            });
        }

        function openSessionMenu(event, id) {
            event?.preventDefault?.();
            event?.stopPropagation?.();
            cancelSessionPress();
            const session = state.sessions.find(s => s.id === id);
            if (!session || !DOM.sessionMenuOverlay) return;
            vibrate();
            state.sessionMenuId = id;
            state.sessionClickLockUntil = Date.now() + 280;
            DOM.sessionMenuTitle.textContent = session.title || 'Nuevo Chat';
            DOM.sessionRenameInput.value = session.title || '';
            DOM.sessionMenuActions.classList.remove('hidden');
            DOM.sessionRenameBox.classList.add('hidden');
            DOM.sessionMenuOverlay.classList.remove('hidden');
            positionSessionMenu(event?.clientX ?? (window.innerWidth * 0.2), event?.clientY ?? (window.innerHeight * 0.22));
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function closeSessionMenu() {
            if (!DOM.sessionMenuOverlay) return;
            DOM.sessionMenuOverlay.classList.add('hidden');
            DOM.sessionMenuActions.classList.remove('hidden');
            DOM.sessionRenameBox.classList.add('hidden');
            state.sessionMenuId = null;
        }

        function beginRenameSession() {
            if (!state.sessionMenuId) return;
            DOM.sessionMenuActions.classList.add('hidden');
            DOM.sessionRenameBox.classList.remove('hidden');
            setTimeout(() => {
                DOM.sessionRenameInput.focus();
                DOM.sessionRenameInput.select();
            }, 40);
        }

        function cancelRenameSession() {
            DOM.sessionRenameBox.classList.add('hidden');
            DOM.sessionMenuActions.classList.remove('hidden');
        }

        function updateSessionTitle(id, nextTitle) {
            const session = state.sessions.find(s => s.id === id);
            if (!session) return;
            session.title = nextTitle;
            session.updatedAt = Date.now();
            state.sessions.sort((a, b) => b.updatedAt - a.updatedAt);
            persistState();
            renderSessionsList();
            updateAppTitle();
        }

        function confirmRenameSession() {
            const nextTitle = (DOM.sessionRenameInput?.value || '').trim().slice(0, 40);
            if (!state.sessionMenuId) return;
            if (!nextTitle) {
                showToast('Escribe un título válido.', 'warning');
                DOM.sessionRenameInput.focus();
                return;
            }
            updateSessionTitle(state.sessionMenuId, nextTitle);
            closeSessionMenu();
            showToast('Título actualizado.', 'success');
        }

        function removeSessionById(id) {
            state.sessions = state.sessions.filter(s => s.id !== id);
            persistState();
            if (state.currentSessionId === id) startNewChat();
            else {
                renderSessionsList();
                updateAppTitle();
            }
        }

        function deleteSessionFromMenu() {
            if (!state.sessionMenuId) return;
            const id = state.sessionMenuId;
            closeSessionMenu();
            removeSessionById(id);
            showToast('Chat eliminado.', 'success');
        }

        function deleteSession(e, id) {
            e?.stopPropagation?.();
            vibrate();
            removeSessionById(id);
        }

        function saveToHistory(newMessages) {
            let id = state.currentSessionId || Date.now().toString();
            state.currentSessionId = id;
            
            const existingIdx = state.sessions.findIndex(s => s.id === id);
            const userMsgs = newMessages.filter(m => m.role === 'user');
            const title = existingIdx >= 0 ? state.sessions[existingIdx].title : String(userMsgs[0]?.text || 'Nuevo Chat').substring(0, 25);
            
            if (existingIdx >= 0) {
                state.sessions[existingIdx].messages = newMessages;
                state.sessions[existingIdx].updatedAt = Date.now();
                state.sessions.sort((a, b) => b.updatedAt - a.updatedAt);
            } else {
                state.sessions.unshift({ id, title, messages: newMessages, updatedAt: Date.now() });
            }
            persistState();
            renderSessionsList();
            updateAppTitle();
            
            if(newMessages.length === 2) autoNameSession();
            return id;
        }

        function toggleSendButton() {
            const val = DOM.chatInput.value.trim();
            const hasContent = val || state.pendingImage;
            DOM.btnSend.disabled = !hasContent;
            if (hasContent) {
                DOM.btnSend.classList.add(state.isDarkMode ? 'bg-white' : 'bg-indigo-600', state.isDarkMode ? 'text-black' : 'text-white');
                DOM.btnSend.classList.remove('bg-slate-200', 'dark:bg-white/5', 'text-slate-400', 'dark:text-gray-600');
                if(state.isBattleMode) DOM.btnSend.classList.add('bg-red-600', 'text-white');
            } else {
                DOM.btnSend.className = `p-3 rounded-full transition-all active:scale-95 flex items-center justify-center bg-slate-200 dark:bg-white/5 text-slate-400 dark:text-gray-600`;
            }
        }

        DOM.chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 150) + 'px';
            toggleSendButton();
            updateCharCounter();
            
            // INYECCIÓN DE ENERGÍA BIOLÓGICA AL TECLEAR
            uiEnergy = Math.min(1.2, uiEnergy + 0.15); 
        });

        DOM.chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
            if (e.key === 'ArrowUp' && DOM.chatInput.value === '') {
                e.preventDefault();
                const userMsgs = state.messages.filter(m => m.role === 'user');
                if (userMsgs.length > 0) setInput(userMsgs[userMsgs.length - 1].text);
            }
        });

        DOM.sessionRenameInput?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmRenameSession();
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                closeSessionMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            closeSessionMenu();
            if (DOM.settingsModal && !DOM.settingsModal.classList.contains('hidden')) {
                closeSettings();
            }
        });

        // --- NÚCLEO DE LA IA (CON COLAPSO DE CONTEXTO) ---
        async function fetchGeminiAPI(prompt, history, targetModel, sysInstruction, imageBase64 = null, imageMime = null, targetVibeId = null) {
            const apiKey = state.apiKeys.chat || "";

            // 1. Etiquetar mensajes y desvincular identidades ajenas
            const rawItems = history.map(m => {
                let assignedRole;
                let finalString;

                if (m.role === 'ai') {
                    // Si el mensaje es de la IA, pero de OTRA Vibe distinta a la que va a responder ahora
                    if (targetVibeId && m.vibeId !== targetVibeId) {
                        assignedRole = 'user'; // Lo pasamos como si fuera otro usuario en la sala
                        const vibeName = VIBES.find(v => v.id === m.vibeId)?.name || 'Otro Agente';
                        finalString = `[Mensaje de tu compañero/a "${vibeName}"]: ${m.text}`;
                    } else {
                        // Es mi propio mensaje del pasado
                        assignedRole = 'model';
                        finalString = m.text;
                    }
                } else {
                    // Mensaje genuino del usuario real
                    assignedRole = 'user';
                    finalString = `[Usuario humano ${state.userName}]: ${m.text}`;
                }
                return { role: assignedRole, text: finalString };
            });

            // 2. Agregar el prompt actual a la lista en crudo
            rawItems.push({
                role: 'user',
                text: prompt,
                inlineData: (imageBase64 && imageMime) ? { mimeType: imageMime, data: imageBase64.split(',')[1] } : null
            });

            // 3. COLAPSO DE CONTEXTO (Para evitar el Error 400 de Gemini API)
            // Gemini exige que los roles sean alternos (user -> model -> user -> model).
            // Si hay dos 'user' seguidos, los fusionamos en un solo bloque.
            const collapsedContents = [];
            let currentItem = null;

            for (const item of rawItems) {
                if (!currentItem) {
                    currentItem = { role: item.role, parts: [{ text: item.text }] };
                    if (item.inlineData) currentItem.parts.push({ inlineData: item.inlineData });
                } else if (currentItem.role === item.role) {
                    // Mismo rol seguido (Ej. usuario habló, y luego otro Agente habló) -> Se fusionan
                    currentItem.parts.push({ text: `\n\n${item.text}` });
                    if (item.inlineData) currentItem.parts.push({ inlineData: item.inlineData });
                } else {
                    // Rol distinto -> Guardamos el actual y empezamos uno nuevo
                    collapsedContents.push(currentItem);
                    currentItem = { role: item.role, parts: [{ text: item.text }] };
                    if (item.inlineData) currentItem.parts.push({ inlineData: item.inlineData });
                }
            }
            if (currentItem) collapsedContents.push(currentItem);

            const payload = {
                systemInstruction: { parts: [{ text: sysInstruction + `\nUsuario actual: ${state.userName}.` }] },
                contents: collapsedContents,
                generationConfig: {
                    temperature: state.creativity,
                    maxOutputTokens: state.responseLength === 'short' ? 800 : (state.responseLength === 'long' ? 8192 : 1500)
                }
            };

            const url = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
            const delays = [1000, 2000, 4000, 8000];
            let lastError = null;

            for (let attempt = 0; attempt <= 4; attempt++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                        signal: state.abortController.signal
                    });

                    if (!response.ok) {
                        const errData = await response.json().catch(() => ({}));
                        const errMsg = errData.error?.message || `API Error: ${response.status}`;
                        if (response.status === 429 || errMsg.includes('Quota')) throw new Error('QUOTA_EXCEEDED');
                        throw new Error(errMsg);
                    }

                    const data = await response.json();
                    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
                } catch (err) {
                    if (err.name === 'AbortError') throw err;
                    if (err.message === 'QUOTA_EXCEEDED') {
                         lastError = new Error("⚠️ Límite de cuota API excedido. Espera unos segundos.");
                         break;
                    }
                    lastError = err;
                    if (attempt < 4) await new Promise(r => setTimeout(r, delays[attempt]));
                }
            }
            throw new Error(lastError?.message || "Error de conexión crítico.");
        }

        async function typewriterEffect(text, vibeId) {
            let currentText = '';
            const chars = text.split('');
            const chunk = Math.max(1, Math.floor(chars.length / 30)); // Velocidad dinámica
            for (let i = 0; i < chars.length; i += chunk) {
                if (state.abortController.signal.aborted) break;
                currentText += chars.slice(i, i + chunk).join('');
                state.messages[state.messages.length - 1] = { role: 'ai', text: currentText, vibeId, timestamp: Date.now() };
                renderMessages();
                await new Promise(r => setTimeout(r, 8)); // 8ms frame
            }
            return state.abortController.signal.aborted;
        }

        function abortGeneration() {
            if (state.abortController) {
                vibrate();
                state.abortController.abort();
                state.isStreaming = false;
                state.isLoading = false;
                DOM.btnSend.classList.remove('hidden');
                DOM.btnStop.classList.add('hidden');
                DOM.typingIndicator.classList.add('hidden');
                updateRuntimeStatus();
                renderMessages();
            }
        }

        async function handleSend(customText = null) {
            const text = customText || DOM.chatInput.value.trim();
            if ((!text && !state.pendingImage) || state.isLoading) return;
            if (!state.apiKeys.chat) {
                showToast('Configura tu API key de chat en Ajustes → API Keys.', 'warning');
                return;
            }

            vibrate();
            DOM.chatInput.value = '';
            DOM.chatInput.style.height = 'auto';
            updateCharCounter();
            
            const img64 = state.pendingImage;
            const imgMime = state.pendingImageMime;
            if (img64) removePendingImage();

            toggleSendButton();
            document.getElementById('reply-suggestions').classList.add('hidden');
            
            state.isLoading = true;
            state.isStreaming = true;
            state.abortController = new AbortController();
            DOM.btnSend.classList.add('hidden');
            DOM.btnStop.classList.remove('hidden');
            DOM.typingIndicator.classList.remove('hidden');
            updateRuntimeStatus();
            updateAppTitle();

            // Lógica de "Citar" (Reply)
            let userDisplayMsg = text;
            let aiHiddenPrompt = text;
            const hasReply = state.replyContext !== null;
            const replyTargetId = hasReply ? state.replyContext.vibeId : null;

            if (hasReply) {
                aiHiddenPrompt = `[EL USUARIO TE ESTÁ RESPONDIENDO DIRECTAMENTE A ESTO: "${state.replyContext.text}"]\nMensaje del usuario: "${text}"`;
            }

            const newMsg = { role: 'user', text: userDisplayMsg, image: img64, timestamp: Date.now() };
            state.messages.push(newMsg);
            saveToHistory(state.messages);
            renderMessages();
            state.isScrolledUp = false;
            scrollToBottom();

            try {
                if (!state.isBattleMode) {
                    // MODO NORMAL
                    state.messages.push({ role: 'ai', text: '', vibeId: state.activeVibe, timestamp: Date.now() });
                    renderMessages();
                    const sysPrompt = getSystemPrompt(state.activeVibe) + getLengthPrompt();
                    const history = state.messages.slice(0, -2);
                    
                    const responseText = await fetchGeminiAPI(aiHiddenPrompt, history, state.modelId, sysPrompt, img64, imgMime, state.activeVibe);
                    const isAborted = await typewriterEffect(responseText, state.activeVibe);
                    
                    if (!isAborted) state.messages[state.messages.length - 1].text = responseText;
                    else state.messages[state.messages.length - 1].text += " 🛑 [Transmisión Cortada]";
                    
                    saveToHistory(state.messages);

                } else {
                    // MODO ARENA 2v2 (Dinámico con Múltiples Modos)
                    
                    let firstAgent = state.activeVibe;
                    let secondAgent = state.agent2Vibe;
                    let firstIsAgente2 = false;

                    if (hasReply && replyTargetId === state.agent2Vibe) {
                        firstAgent = state.agent2Vibe;
                        secondAgent = state.activeVibe;
                        firstIsAgente2 = true;
                    }

                    const agent1Info = getVibe(firstAgent);
                    const agent2Info = getVibe(secondAgent);

                    // --- GENERADOR DE PROMPTS BASADO EN LA DINÁMICA SELECCIONADA ---
                    let modePrompt1 = "";
                    let modePrompt2 = "";

                    if (state.arenaMode === 'chat') {
                        modePrompt1 = `[INSTRUCCIÓN ARENA: CHARLA AMISTOSA] Estás conversando casualmente junto a "${agent2Info.name}". Responde al usuario amigablemente asumiendo tu personalidad.`;
                        modePrompt2 = `[INSTRUCCIÓN ARENA: CHARLA AMISTOSA] "${agent1Info.name}" acaba de decir: "__ARENA_RESPONSE__". Complementa su idea o dale la razón de forma amigable asumiendo tu personalidad, y responde al usuario.`;
                    } else if (state.arenaMode === 'trio') {
                        modePrompt1 = `[INSTRUCCIÓN ARENA: TRÍO/TENSIÓN] Estás en una dinámica de a tres con el usuario y "${agent2Info.name}". Coquetea, juega o actúa según tu personalidad incluyéndolos a ambos.`;
                        modePrompt2 = `[INSTRUCCIÓN ARENA: TRÍO/TENSIÓN] "${agent1Info.name}" acaba de decir: "__ARENA_RESPONSE__". Reacciona a lo que dijo (con celos, amor, burla o tensión según tu vibe) y dirígete al usuario en esta dinámica de 3.`;
                    } else if (state.arenaMode === 'coop') {
                        modePrompt1 = `[INSTRUCCIÓN ARENA: COOPERATIVO] Estás haciendo equipo con "${agent2Info.name}" para ayudar al usuario. Da tu primera aportación de forma constructiva asumiendo tu personalidad.`;
                        modePrompt2 = `[INSTRUCCIÓN ARENA: COOPERATIVO] Tu compañero "${agent1Info.name}" sugirió: "__ARENA_RESPONSE__". Construye sobre su idea asumiendo tu personalidad para darle al usuario la mejor respuesta posible juntos.`;
                    } else { // Debate
                        modePrompt1 = `[INSTRUCCIÓN ARENA: DEBATE HOSTIL] Estás en un debate contra "${agent2Info.name}". Responde al usuario asumiendo tu personalidad al máximo y prepárate para ser criticado.`;
                        modePrompt2 = `[INSTRUCCIÓN ARENA: DEBATE HOSTIL] Tu oponente ("${agent1Info.name}") acaba de responder esta basura: "__ARENA_RESPONSE__". CRITICA a tu oponente por su actitud y dale tu respuesta al usuario. ¡DEMUESTRA TU SUPERIORIDAD!`;
                    }

                    // TURNO 1
                    state.messages.push({ role: 'ai', text: '', vibeId: firstAgent, timestamp: Date.now() });
                    renderMessages();
                    const sysPrompt1 = getSystemPrompt(firstAgent) + getLengthPrompt();
                    const history1 = state.messages.slice(0, -2);
                    
                    let prompt1 = `El usuario dice: "${text}".\n${modePrompt1}\nNO ROMPAS PERSONAJE. NUNCA DIGAS QUE ERES IA.`;
                    if (hasReply) prompt1 = `[EL USUARIO TE RESPONDIÓ DIRECTAMENTE A ESTO: "${state.replyContext.text}"]\nMensaje del usuario: "${text}".\n${modePrompt1}`;
                    
                    const responseText1 = await fetchGeminiAPI(prompt1, history1, firstIsAgente2 ? state.agent2Model : state.modelId, sysPrompt1, img64, imgMime, firstAgent);
                    const isAborted1 = await typewriterEffect(responseText1, firstAgent);
                    state.messages[state.messages.length - 1].text = isAborted1 ? state.messages[state.messages.length - 1].text + " 🛑" : responseText1;
                    saveToHistory(state.messages);

                    // TURNO 2
                    if (!isAborted1 && !state.abortController.signal.aborted) {
                        state.messages.push({ role: 'ai', text: '', vibeId: secondAgent, timestamp: Date.now() });
                        renderMessages();
                        const sysPrompt2 = getSystemPrompt(secondAgent) + getLengthPrompt();
                        const history2 = state.messages.slice(0, -1);
                        
                        let prompt2 = `El usuario dijo: "${text}".\n${modePrompt2.replace('__ARENA_RESPONSE__', responseText1)}\nNO ROMPAS PERSONAJE. NUNCA DIGAS QUE ERES IA.`;
                        
                        const responseText2 = await fetchGeminiAPI(prompt2, history2, firstIsAgente2 ? state.modelId : state.agent2Model, sysPrompt2, null, null, secondAgent);
                        const isAborted2 = await typewriterEffect(responseText2, secondAgent);
                        state.messages[state.messages.length - 1].text = isAborted2 ? state.messages[state.messages.length - 1].text + " 🛑" : responseText2;
                        saveToHistory(state.messages);
                    }
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    state.messages.push({ role: 'ai', text: `*[System Error]*: ${err.message}`, vibeId: state.activeVibe, timestamp: Date.now() });
                    showToast(err.message || 'No se pudo completar la respuesta.', 'error');
                    renderMessages();
                }
            } finally {
                cancelReply(); // Limpiar el citado siempre al terminar
                state.isLoading = false;
                state.isStreaming = false;
                DOM.btnSend.classList.remove('hidden');
                DOM.btnStop.classList.add('hidden');
                DOM.typingIndicator.classList.add('hidden');
                updateRuntimeStatus();
                updateAppTitle();
                renderMessages();
                DOM.chatInput.focus();
            }
        }

        async function handleQuickAction(action) {
            if (state.isLoading) return; 
            if (!state.apiKeys.chat) {
                showToast('Configura tu API key de chat antes de usar acciones rápidas.', 'warning');
                return;
            }

            vibrate();
            let targetVibe = state.activeVibe;
            let promptText = "";
            let userText = "";

            if (action === 'fight') {
                const aiMsgs = state.messages.filter(m => m.role === 'ai');
                const lastAi = aiMsgs.length > 0 ? aiMsgs[aiMsgs.length - 1] : null;
                targetVibe = (lastAi && lastAi.vibeId === state.activeVibe) ? state.agent2Vibe : state.activeVibe;
                
                if (state.arenaMode === 'chat') {
                    promptText = "INSTRUCCIÓN DE ARENA: El otro participante acaba de hablar. Ignora un poco al usuario y responde DIRECTAMENTE a lo que dijo el otro de forma AMIGABLE y casual. ¡NUNCA ROMPAS TU PERSONAJE!";
                    userText = "[Iniciando charla...]";
                } else if (state.arenaMode === 'trio') {
                    promptText = "INSTRUCCIÓN DE ARENA: El otro participante acaba de hablar. Responde DIRECTAMENTE a lo que dijo el otro creando TENSIÓN ROMÁNTICA, CELOS O COQUETEO en esta dinámica de tres. ¡NUNCA ROMPAS TU PERSONAJE!";
                    userText = "[Iniciando tensión de a tres...]";
                } else if (state.arenaMode === 'coop') {
                    promptText = "INSTRUCCIÓN DE ARENA: El otro participante acaba de hablar. Apoya su idea, compleméntala o trabajen JUNTOS para resolver el tema. ¡NUNCA ROMPAS TU PERSONAJE!";
                    userText = "[Trabajando en equipo...]";
                } else {
                    promptText = "INSTRUCCIÓN DE ARENA EXTREMA: El otro participante acaba de hablar. Ignora un poco al usuario y responde DIRECTAMENTE a lo que dijo el otro. Critica, debate, ponte celoso o búrlate de su respuesta, ¡NUNCA ROMPAS TU PERSONAJE!";
                    userText = "[Iniciando pelea...]";
                }
            } else {
                if (state.activeVibe !== 'romantic') {
                    if (action === 'roast') targetVibe = 'hater';
                    if (action === 'explain') targetVibe = 'study';
                }
                const promptsMap = {
                    resume: "Hazme un resumen de la plática ultra corto. Sé directo y mantén tu personaje.",
                    explain: "Explícame de qué diablos estamos hablando como si yo fuera muy lento. Con manzanas.",
                    roast: "Insúltame brutalmente con sarcasmo por las tonterías que he escrito.",
                    debunk: "¿Es real o es puro bait lo último que dijimos? Destrúyelo.",
                    psycho: "Analiza mi plática y dime qué traumas tengo. Hazme pedazos."
                };
                const userTexts = { resume: "¿Resumen rápido?", explain: "Explícame esto.", roast: "Tírame hate.", debunk: "¿Es bait?", psycho: "Psicoanalízame." };
                promptText = promptsMap[action];
                userText = userTexts[action];

                if (targetVibe === 'romantic') {
                    if(action==='roast') { promptText="El usuario pide que lo insultes. NIÉGATE rotundamente, ofrécele un abrazo físico y dile lo maravillosamente perfecto que es."; userText="Tírame hate mi amor."; }
                    if(action==='explain') promptText="Explica esto de forma extremadamente dulce y con besos.";
                    if(action==='resume') promptText="Haz un resumen súper tierno y romántico de nuestra charla.";
                    if(action==='psycho') promptText="Dime por qué soy la persona más hermosa y perfecta del universo, con mucha poesía.";
                }
            }

            state.messages.push({ role: 'user', text: userText, timestamp: Date.now() });
            saveToHistory(state.messages);
            
            state.isLoading = true;
            state.isStreaming = true;
            state.abortController = new AbortController();
            DOM.btnSend.classList.add('hidden');
            DOM.btnStop.classList.remove('hidden');
            DOM.typingIndicator.classList.remove('hidden');
            updateRuntimeStatus();
            updateAppTitle();

            try {
                state.messages.push({ role: 'ai', text: '', vibeId: targetVibe, timestamp: Date.now() });
                renderMessages(); 
                
                const sysPrompt = getSystemPrompt(targetVibe) + getLengthPrompt();
                const history = state.messages.slice(0, -2); 
                
                const responseText = await fetchGeminiAPI(promptText, history, state.modelId, sysPrompt, null, null, targetVibe);
                
                const isAborted = await typewriterEffect(responseText, targetVibe);
                state.messages[state.messages.length - 1].text = isAborted ? state.messages[state.messages.length - 1].text + " 🛑" : responseText;
                
                saveToHistory(state.messages);
            } catch (err) {
                if (err.name !== 'AbortError') showToast(err.message || 'Ocurrió un error en la acción rápida.', 'error');
            } finally {
                state.isLoading = false; 
                state.isStreaming = false;
                DOM.btnSend.classList.remove('hidden'); 
                DOM.btnStop.classList.add('hidden');
                DOM.typingIndicator.classList.add('hidden');
                updateRuntimeStatus();
                updateAppTitle();
                renderMessages();
                DOM.chatInput.focus();
            }
        }

        // --- FUNCIONES UTILIDAD Y UI PREMIUM ---
        function copyToClipboard(text) {
            navigator.clipboard.writeText(decodeURIComponent(text))
                .then(() => {
                    vibrate();
                    showToast('Mensaje copiado.', 'success');
                })
                .catch(() => showToast('No se pudo copiar el mensaje.', 'error'));
        }

        function copyMsgText(btn, text) {
            copyToClipboard(encodeURIComponent(text));
            const iconCopy = btn.querySelector('.icon-copy');
            const iconCheck = btn.querySelector('.icon-check');
            iconCopy.classList.add('hidden');
            iconCheck.classList.remove('hidden');
            btn.classList.add('text-green-500');
            setTimeout(() => {
                iconCopy.classList.remove('hidden');
                iconCheck.classList.add('hidden');
                btn.classList.remove('text-green-500');
            }, 2000);
        }

        function scrollToBottom() {
            DOM.chatContainer.scrollTo({ top: DOM.chatContainer.scrollHeight, behavior: 'smooth' });
            DOM.btnScrollDown.classList.add('hidden');
            state.isScrolledUp = false;
        }

        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = DOM.chatContainer;
            if (scrollHeight - scrollTop - clientHeight > 150) {
                DOM.btnScrollDown.classList.remove('hidden');
                state.isScrolledUp = true;
            } else {
                DOM.btnScrollDown.classList.add('hidden');
                state.isScrolledUp = false;
            }
        }
        DOM.chatContainer.addEventListener('scroll', handleScroll);

        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));
        }

        function formatText(str) {
            let safe = escapeHTML(str);
            // Advanced Markdown: Code Blocks
            safe = safe.replace(/```(.*?)\n([\s\S]*?)```/g, (match, lang, code) => {
                const encoded = encodeURIComponent(code);
                return `<div class="bg-[#0d1117] border border-white/10 rounded-lg my-3 shadow-lg overflow-hidden group/code">
                    <div class="text-[10px] text-slate-400 bg-black/40 px-3 py-1.5 border-b border-white/5 flex justify-between items-center">
                        <span class="font-mono uppercase tracking-widest">${lang || 'CODE'}</span>
                        <button onclick="copyMsgText(this, '${encoded}')" class="hover:text-white flex items-center gap-1 transition-colors"><i data-lucide="copy" class="w-3 h-3 icon-copy"></i><i data-lucide="check" class="w-3 h-3 icon-check hidden text-green-500"></i> Copiar</button>
                    </div>
                    <pre class="p-4 text-[13px] overflow-x-auto text-emerald-400 font-mono leading-relaxed">${code}</pre>
                </div>`;
            });
            // Bold & Italic
            safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            safe = safe.replace(/\*(.*?)\*/g, '<em>$1</em>');
            // Linebreaks
            safe = safe.replace(/\n/g, '<br>');
            return safe;
        }

        // Lightbox
        function openLightbox(src) {
            document.getElementById('lightbox-img').src = src;
            document.getElementById('lightbox').classList.remove('hidden');
        }
        function closeLightbox() {
            document.getElementById('lightbox').classList.add('hidden');
            document.getElementById('lightbox-img').src = '';
        }

        // --- AJUSTES MODAL ---
        function isSettingsMobile() {
            return window.innerWidth < 768;
        }

        function openSettings(tab) {
            vibrate();
            state.currentTab = tab || state.currentTab || 'appearance';
            state.mobileView = isSettingsMobile() ? 'menu' : 'content';
            document.body.classList.add('settings-open');
            DOM.settingsModal.classList.remove('hidden');
            requestAnimationFrame(() => DOM.settingsModal.classList.add('opacity-100'));
            renderSettingsTabs();
            renderSettingsContent();
        }

        function closeSettings() {
            if (typeof settingsMobileScrollBinding.cleanup === 'function') {
                settingsMobileScrollBinding.cleanup();
            }
            settingsMobileScrollBinding = { element: null, cleanup: null, lastTop: 0, upTravel: 0, downTravel: 0 };
            DOM.settingsModal.classList.remove('opacity-100');
            document.body.classList.remove('settings-open');
            setTimeout(() => DOM.settingsModal.classList.add('hidden'), 220);
            state.mobileView = isSettingsMobile() ? 'menu' : 'content';
            persistState();
            applyTheme();
        }

        function goBackSettings() {
            state.mobileView = isSettingsMobile() ? 'menu' : 'content';
            renderSettingsTabs();
            renderSettingsContent();
            if (isSettingsMobile()) {
                DOM.settingsNav?.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function selectMobileTab(tabId) {
            state.currentTab = tabId;
            state.mobileView = 'content';
            renderSettingsTabs();
            renderSettingsContent();
            const pane = document.querySelector('.settings-pane');
            if (pane) pane.scrollTo({ top: 0, behavior: 'auto' });
        }

        function handleSettingsViewportChange() {
            if (!DOM.settingsModal || DOM.settingsModal.classList.contains('hidden')) return;
            state.mobileView = isSettingsMobile() ? (state.mobileView === 'content' ? 'content' : 'menu') : 'content';
            renderSettingsTabs();
            renderSettingsContent();
        }

        function saveSettings() {
            closeSettings();
            showToast('Los cambios ya se guardan automáticamente.', 'info');
        }

        function getSettingsMeta(tabId) {
            return SETTINGS_META[tabId] || SETTINGS_META.appearance;
        }

        function getVibePreviewCopy(vibeId) {
            const catalog = {
                chill: 'tono relajado y casual',
                hater: 'sarcasmo agresivo',
                study: 'modo estudio y enfoque',
                romantic: 'romance intenso y suave',
                doomer: 'melancólico y gris',
                conspiracy: 'caótico y paranoico',
                custom: 'personalidad hecha a medida'
            };
            return catalog[vibeId] || 'personalidad adaptable';
        }

        function getCreativityLabel(value) {
            if (value <= 0.3) return 'Precisa';
            if (value >= 1.2) return 'Alta';
            return 'Balanceada';
        }

        function getArenaModeLabel(mode) {
            return ({ debate: 'Pelea', chat: 'Amistad', trio: 'Trío', coop: 'Equipo' }[mode]) || 'Pelea';
        }

        let settingsMobileScrollBinding = { element: null, cleanup: null, lastTop: 0, upTravel: 0, downTravel: 0 };

        function setSettingsMobileSummaryVisibility(isVisible, animateDrop = false) {
            const summary = document.getElementById('settings-mobile-summary');
            if (!summary) return;
            summary.classList.toggle('is-hidden', !isVisible);
            summary.classList.toggle('is-visible', isVisible);

            if (isVisible && animateDrop) {
                summary.classList.remove('is-dropping');
                void summary.offsetWidth;
                summary.classList.add('is-dropping');
                setTimeout(() => summary.classList.remove('is-dropping'), 280);
            }
        }

        function bindSettingsMobileSummaryScroll() {
            if (!isSettingsMobile() || !DOM.settingsModal || DOM.settingsModal.classList.contains('hidden')) return;

            const container = state.mobileView === 'content'
                ? document.querySelector('#settings-panel[data-mobile-view="content"] .settings-pane')
                : document.querySelector('#settings-panel[data-mobile-view="menu"] .settings-tabs-shell');

            if (!container) return;

            if (settingsMobileScrollBinding.element === container) {
                setSettingsMobileSummaryVisibility(true);
                return;
            }

            if (typeof settingsMobileScrollBinding.cleanup === 'function') {
                settingsMobileScrollBinding.cleanup();
            }

            settingsMobileScrollBinding.element = container;
            settingsMobileScrollBinding.lastTop = container.scrollTop || 0;
            settingsMobileScrollBinding.upTravel = 0;
            settingsMobileScrollBinding.downTravel = 0;
            setSettingsMobileSummaryVisibility(true, true);

            const onScroll = () => {
                const currentTop = container.scrollTop || 0;
                const delta = currentTop - settingsMobileScrollBinding.lastTop;

                if (currentTop <= 6) {
                    settingsMobileScrollBinding.upTravel = 0;
                    settingsMobileScrollBinding.downTravel = 0;
                    setSettingsMobileSummaryVisibility(true);
                } else if (delta > 1.5) {
                    settingsMobileScrollBinding.downTravel += delta;
                    settingsMobileScrollBinding.upTravel = 0;
                    if (settingsMobileScrollBinding.downTravel > 14) {
                        setSettingsMobileSummaryVisibility(false);
                    }
                } else if (delta < -1.5) {
                    settingsMobileScrollBinding.upTravel += Math.abs(delta);
                    settingsMobileScrollBinding.downTravel = 0;
                    if (settingsMobileScrollBinding.upTravel > 10) {
                        setSettingsMobileSummaryVisibility(true, true);
                    }
                }

                settingsMobileScrollBinding.lastTop = currentTop;
            };

            container.addEventListener('scroll', onScroll, { passive: true });
            settingsMobileScrollBinding.cleanup = () => container.removeEventListener('scroll', onScroll);
        }

        function pulseSettingsPanel() {
            const panel = DOM.settingsPanel || document.getElementById('settings-panel');
            if (!panel) return;
            panel.classList.remove('settings-panel-feedback');
            void panel.offsetWidth;
            panel.classList.add('settings-panel-feedback');
            setTimeout(() => panel.classList.remove('settings-panel-feedback'), 280);
        }

        function renderSettingsSignalCard({ label, value, detail = '', icon = 'sparkles', tone = 'indigo' }) {
            return `
                <div class="settings-signal-card settings-signal-${tone}">
                    <span class="settings-signal-icon"><i data-lucide="${icon}" class="w-4 h-4"></i></span>
                    <div class="settings-signal-copy">
                        <small>${label}</small>
                        <strong>${value}</strong>
                        ${detail ? `<span>${detail}</span>` : ''}
                    </div>
                </div>
            `;
        }

        function renderSettingsSignalGrid(items) {
            return `<section class="settings-signal-grid">${items.join('')}</section>`;
        }

        function renderSettingsIntro(tabId) {
            const meta = getSettingsMeta(tabId);
            return `
                <section class="settings-page-intro">
                    <div>
                        <span class="settings-kicker">${meta.eyebrow}</span>
                        <h4 class="settings-page-title">${meta.title}</h4>
                        <p class="settings-page-description">${meta.description}</p>
                    </div>
                    <div class="settings-page-pulse">
                        <span class="settings-page-pulse-dot"></span>
                        <span>${state.isDarkMode ? 'Modo oscuro' : 'Modo claro'} · ${state.neonMode ? 'FX activos' : 'FX suaves'}</span>
                    </div>
                </section>
            `;
        }

        function renderSettingsToggle(option) {
            const isTrue = state[option.id];
            return `
                <button type="button" data-magnetic="soft" onclick="updateStateSetting('${option.id}', ${!isTrue})" class="settings-card settings-toggle-row">
                    <div class="settings-toggle-copy">
                        <span class="settings-icon-badge ${isTrue ? 'is-active' : ''}">
                            <i data-lucide="${option.icon}" class="w-4 h-4"></i>
                        </span>
                        <div class="settings-card-copy">
                            <div class="settings-card-heading">
                                <p class="settings-card-title">${option.label}</p>
                                <span class="settings-state-pill ${isTrue ? 'is-on' : 'is-off'}">${isTrue ? 'Activo' : 'Off'}</span>
                            </div>
                            <p class="settings-card-description">${option.description}</p>
                        </div>
                    </div>
                    <span class="settings-switch ${isTrue ? 'is-on' : ''}">
                        <span class="settings-switch-thumb"></span>
                    </span>
                </button>
            `;
        }

        function renderSettingsSegment(stateKey, options) {
            return `
                <div class="settings-segment-row">
                    ${options.map(option => {
                        const isSelected = state[stateKey] === option.value;
                        const serializedValue = typeof option.value === 'string'
                            ? `'${option.value.replace(/'/g, "\\'")}'`
                            : option.value;
                        return `
                            <button data-magnetic="soft" onclick="updateStateSetting('${stateKey}', ${serializedValue})" class="settings-segment-button ${isSelected ? 'is-selected' : ''}">
                                ${option.icon ? `<i data-lucide="${option.icon}" class="w-4 h-4"></i>` : ''}
                                <span>${option.label}</span>
                                ${option.note ? `<small>${option.note}</small>` : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
            `;
        }

        function renderSettingsChoiceCard({ title, subtitle = '', icon = 'sparkles', selected = false, onClick = '' }) {
            return `
                <button data-magnetic="soft" onclick="${onClick}" class="settings-option-card ${selected ? 'is-selected' : ''}">
                    <div class="settings-option-head">
                        <span class="settings-option-icon"><i data-lucide="${icon}" class="w-4 h-4"></i></span>
                        <span class="settings-state-pill ${selected ? 'is-on' : 'is-idle'}">${selected ? 'Activo' : 'Elegir'}</span>
                    </div>
                    <strong class="settings-option-label">${title}</strong>
                    ${subtitle ? `<span class="settings-option-note">${subtitle}</span>` : ''}
                </button>
            `;
        }

        function renderSettingsTabs() {
            const isMobile = isSettingsMobile();
            const currentView = isMobile ? (state.mobileView === 'content' ? 'content' : 'menu') : 'content';
            const activeTab = SETTINGS_TABS.find(t => t.id === state.currentTab) || SETTINGS_TABS[0];
            const settingsPanel = document.getElementById('settings-panel');
            const backBtn = document.querySelector('.settings-back-mobile');
            const closeBtn = document.querySelector('.settings-close-mobile');
            const mobileTitle = document.getElementById('settings-mobile-toolbar-title');
            const mobileDock = document.getElementById('settings-mobile-dock');
            const mobileSummary = document.getElementById('settings-mobile-summary');

            DOM.settingsNav.classList.remove('hidden', 'md:hidden');
            if (settingsPanel) settingsPanel.setAttribute('data-mobile-view', currentView);
            if (backBtn) backBtn.classList.toggle('hidden', !isMobile || currentView !== 'content');
            if (closeBtn) closeBtn.classList.toggle('hidden', isMobile && currentView === 'content');
            if (mobileTitle) mobileTitle.textContent = isMobile ? (currentView === 'content' ? activeTab.label : 'Ajustes') : '';
            if (mobileDock) mobileDock.innerHTML = '';
            if (mobileSummary) mobileSummary.innerHTML = '';

            if (isMobile && currentView === 'content') {
                DOM.settingsTabs.innerHTML = '';
                bindMagneticSurfaceFX();
                if (typeof lucide !== 'undefined') lucide.createIcons();
                return;
            }

            if (isMobile) {
                DOM.settingsTabs.innerHTML = MOBILE_SETTINGS_GROUPS.map(group => `
                    <section class="settings-mobile-group">
                        <p class="settings-mobile-group-label">${group.label}</p>
                        <div class="settings-mobile-group-list">
                            ${group.tabs.map(tabId => {
                                const t = SETTINGS_TABS.find(item => item.id === tabId);
                                if (!t) return '';
                                const meta = getSettingsMeta(t.id);
                                const isActive = state.currentTab === t.id;
                                return `
                                    <button data-magnetic="soft" onclick="selectMobileTab('${t.id}')" class="settings-tab-button settings-mobile-row ${isActive ? 'is-active' : ''}" aria-pressed="${isActive}">
                                        <span class="settings-mobile-row-copy">
                                            <strong>${t.label}</strong>
                                            <small>${meta.description}</small>
                                        </span>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </section>
                `).join('');

                bindMagneticSurfaceFX();
                if (typeof lucide !== 'undefined') lucide.createIcons();
                return;
            }

            DOM.settingsTabs.innerHTML = SETTINGS_TABS.map(t => {
                const meta = getSettingsMeta(t.id);
                const isActive = state.currentTab === t.id;
                return `
                    <button data-magnetic="soft" onclick="openSettings('${t.id}')" class="settings-tab-button ${isActive ? 'is-active' : ''}" aria-pressed="${isActive}">
                        <span class="settings-tab-icon"><i data-lucide="${t.icon}" class="w-4 h-4"></i></span>
                        <span class="settings-tab-copy">
                            <strong>${t.label}</strong>
                            <small>${meta.eyebrow}</small>
                        </span>
                    </button>
                `;
            }).join('');
            bindMagneticSurfaceFX();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        function updateStateSetting(key, val) {
            state[key] = val;
            persistState();
            pulseSettingsPanel();
            if (navigator.vibrate && window.innerWidth < 768) navigator.vibrate(16);
            renderSettingsTabs();
            renderSettingsContent();

            if (['isDarkMode', 'neonMode', 'dynamicUI', 'compactMode', 'glassMode', 'activeVibe'].includes(key)) {
                applyTheme();
            }

            if (key === 'activeVibe') {
                document.body.style.animation = 'none';
                setTimeout(() => document.body.style.animation = 'vibeShift 0.5s ease-out forwards', 10);
                if (state.messages.length === 0) {
                    state.suggestions = FALLBACK_SUGGESTIONS[val] || FALLBACK_SUGGESTIONS.chill;
                    renderMessages();
                    fetchSmartSuggestions();
                }
            }
        }

        function updateTextSetting(key, val) {
            state[key] = val;
            persistState();
        }

        function updateApiSetting(key, val) {
            state.apiKeys[key] = val;
            persistState();
            pulseSettingsPanel();
        }

        function renderSettingsContent() {
            const isMobile = isSettingsMobile();
            const settingsPanel = document.getElementById('settings-panel');
            if (settingsPanel) settingsPanel.setAttribute('data-mobile-view', isMobile ? (state.mobileView === 'content' ? 'content' : 'menu') : 'content');

            if (isMobile && state.mobileView !== 'content') {
                DOM.settingsContent.innerHTML = `
                    <section class="settings-mobile-overview">
                        <span class="settings-kicker">autoguardado</span>
                        <h4 class="settings-page-title">Cambios al instante</h4>
                        <p class="settings-page-description">Toca una opción y se aplica al momento. Ya no hace falta botón de guardar.</p>
                    </section>
                `;
                bindMagneticSurfaceFX();
                requestAnimationFrame(bindSettingsMobileSummaryScroll);
                return;
            }

            const t = state.currentTab;
            let html = isMobile ? '' : renderSettingsIntro(t);

            if (t === 'appearance') {
                const opts = [
                    { id: 'isDarkMode', label: 'Modo oscuro', icon: 'moon', description: 'Optimiza el contraste y el confort visual para sesiones largas o entornos nocturnos.' },
                    { id: 'neonMode', label: 'Neural glow', icon: 'sparkles', description: 'Activa brillo, profundidad y presencia visual con una sensación más viva.' },
                    { id: 'dynamicUI', label: 'Física dinámica', icon: 'box', description: 'Permite que el panel responda al movimiento y se sienta más orgánico al tocar.' },
                    { id: 'compactMode', label: 'Densidad compacta', icon: 'layout-list', description: 'Reduce espacios verticales y ordena mejor los controles en pantallas pequeñas.' },
                    { id: 'glassMode', label: 'Cristal premium', icon: 'monitor', description: 'Refuerza la transparencia material y el acabado elegante del sistema.' }
                ];

                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Tema', value: state.isDarkMode ? 'Oscuro' : 'Claro', detail: state.glassMode ? 'glass premium' : 'soft matte', icon: 'sun-moon', tone: 'indigo' }),
                        renderSettingsSignalCard({ label: 'FX', value: state.neonMode ? 'Neon' : 'Suave', detail: state.dynamicUI ? 'interfaz reactiva' : 'flujo estable', icon: 'sparkles', tone: 'cyan' }),
                        renderSettingsSignalCard({ label: 'Densidad', value: state.compactMode ? 'Compacta' : 'Aireada', detail: 'espaciado del panel', icon: 'rows-3', tone: 'emerald' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Materiales, física y lectura</h4>
                                <p class="settings-section-description">Cada control modifica la sensación visual del sistema en tiempo real para que el panel se vea premium y no saturado.</p>
                            </div>
                        </div>
                        <div class="settings-stack">
                            ${opts.map(renderSettingsToggle).join('')}
                        </div>
                    </section>
                `;
            } else if (t === 'model') {
                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Modelo', value: (state.modelId || 'gemini-2.5-flash').replace('gemini-', 'Gemini '), detail: 'motor actual', icon: 'cpu', tone: 'indigo' }),
                        renderSettingsSignalCard({ label: 'Longitud', value: state.responseLength === 'short' ? 'Corta' : state.responseLength === 'long' ? 'Larga' : 'Normal', detail: 'ritmo de respuesta', icon: 'align-justify', tone: 'cyan' }),
                        renderSettingsSignalCard({ label: 'Creatividad', value: getCreativityLabel(state.creativity), detail: `${state.creativity} de temperatura`, icon: 'wand-2', tone: 'amber' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Motor principal</h4>
                                <p class="settings-section-description">Selecciona el cerebro base con un layout más limpio y fácil de comparar.</p>
                            </div>
                        </div>
                        <div class="settings-option-grid">
                            ${MODELS.map(m => renderSettingsChoiceCard({
                                title: m.name,
                                subtitle: m.id,
                                icon: 'cpu',
                                selected: state.modelId === m.id,
                                onClick: `updateStateSetting('modelId', '${m.id}')`
                            })).join('')}
                        </div>
                    </section>

                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Ritmo y carácter</h4>
                                <p class="settings-section-description">Ajusta cuánto habla y qué tan libre se vuelve el modelo en cada respuesta.</p>
                            </div>
                        </div>
                        <div class="settings-segment">
                            <div>
                                <p class="settings-card-title">Longitud</p>
                                <p class="settings-card-description">Controla la densidad del texto para que sea breve, balanceado o más profundo.</p>
                            </div>
                            ${renderSettingsSegment('responseLength', [
                                { value: 'short', label: 'Corta', icon: 'align-left', note: 'rápida' },
                                { value: 'normal', label: 'Normal', icon: 'align-justify', note: 'balance' },
                                { value: 'long', label: 'Larga', icon: 'align-right', note: 'detalle' }
                            ])}
                        </div>
                        <div class="settings-segment mt-4">
                            <div>
                                <p class="settings-card-title">Creatividad</p>
                                <p class="settings-card-description">Define si responde con precisión, equilibrio o más soltura creativa.</p>
                            </div>
                            ${renderSettingsSegment('creativity', [
                                { value: 0.2, label: 'Preciso', note: 'estable' },
                                { value: 0.7, label: 'Balance', note: 'mixto' },
                                { value: 1.5, label: 'Desatado', note: 'más libre' }
                            ])}
                        </div>
                    </section>
                `;
            } else if (t === 'api') {
                const keyMeta = {
                    chat: { label: 'Chat Core', note: 'modelo principal' },
                    tools: { label: 'Tools', note: 'acciones extra' },
                    suggestions: { label: 'Suggestions', note: 'respuestas rápidas' },
                    labs: { label: 'Labs', note: 'experimentos' }
                };
                const usedKeys = Object.values(state.apiKeys || {}).filter(Boolean).length;

                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Guardado', value: 'Local', detail: 'solo en este navegador', icon: 'shield-check', tone: 'emerald' }),
                        renderSettingsSignalCard({ label: 'Claves', value: `${usedKeys}/4`, detail: 'rellenadas ahora', icon: 'key', tone: 'amber' }),
                        renderSettingsSignalCard({ label: 'Estado', value: usedKeys ? 'Listo' : 'Pendiente', detail: 'conexión del sistema', icon: 'network', tone: 'indigo' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Claves y conectores</h4>
                                <p class="settings-section-description">Todo queda ordenado por función para que sea más fácil revisar qué módulo usa cada acceso.</p>
                            </div>
                        </div>
                        <p class="settings-help-note">Tip: usa solo las claves necesarias y deja vacías las que no utilices para mantener el panel limpio.</p>
                        <div class="settings-field-grid">
                            ${['chat', 'tools', 'suggestions', 'labs'].map(f => `
                                <label class="settings-field-card">
                                    <span class="settings-field-label">${keyMeta[f].label}</span>
                                    <span class="settings-help-note">${keyMeta[f].note}</span>
                                    <input type="password" value="${escapeHTML(state.apiKeys[f] || '')}" oninput="updateApiSetting('${f}', this.value)" placeholder="Pega tu clave aquí" class="w-full rounded-xl px-3 py-3 text-[12px] md:text-[13px] outline-none font-mono bg-slate-100 dark:bg-black/40 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                                </label>
                            `).join('')}
                        </div>
                    </section>
                `;
            } else if (t === 'persona') {
                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Nombre', value: state.userName?.trim() ? state.userName : 'Sin definir', detail: 'identidad visible', icon: 'badge-check', tone: 'indigo' }),
                        renderSettingsSignalCard({ label: 'Género', value: state.userGender || 'otro', detail: 'adaptación de algunas vibes', icon: 'user-round', tone: 'rose' }),
                        renderSettingsSignalCard({ label: 'Vibe', value: getVibe(state.activeVibe).name, detail: 'perfil activo', icon: 'user-circle', tone: 'cyan' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Perfil base</h4>
                                <p class="settings-section-description">Mantén tu identidad clara para que la conversación se sienta más personal, consistente y refinada.</p>
                            </div>
                        </div>
                        <div class="settings-field-grid">
                            <label class="settings-field-card settings-field-card-wide">
                                <span class="settings-field-label">Nombre visible</span>
                                <input type="text" value="${escapeHTML(state.userName)}" oninput="updateTextSetting('userName', this.value)" placeholder="¿Cómo te llamas?" class="w-full rounded-xl px-3 py-3 text-[13px] md:text-sm outline-none bg-slate-100 dark:bg-black/40 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                            </label>
                        </div>
                        <div class="settings-segment mt-4">
                            <div>
                                <p class="settings-card-title">Género de usuario</p>
                                <p class="settings-card-description">Sirve para adaptar ciertos matices de algunas vibes y dinámicas del sistema.</p>
                            </div>
                            ${renderSettingsSegment('userGender', [
                                { value: 'hombre', label: 'Hombre' },
                                { value: 'mujer', label: 'Mujer' },
                                { value: 'otro', label: 'Otro' }
                            ])}
                        </div>
                    </section>
                `;
            } else if (t === 'vibe') {
                const selectedVibe = getVibe(state.activeVibe);
                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Activo', value: selectedVibe.name, detail: getVibePreviewCopy(selectedVibe.id), icon: selectedVibe.ui.botIcon, tone: 'indigo' }),
                        renderSettingsSignalCard({ label: 'Estado', value: getUI(selectedVibe).statusLabel, detail: 'presencia actual', icon: 'activity', tone: 'cyan' }),
                        renderSettingsSignalCard({ label: 'Interfaz', value: state.dynamicUI ? 'Dinámica' : 'Clásica', detail: 'morfología del sistema', icon: 'sparkles', tone: 'emerald' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Selector de vibe</h4>
                                <p class="settings-section-description">Cada opción tiene una identidad más clara, una lectura más rápida y una selección visual más premium.</p>
                            </div>
                        </div>
                        <div class="settings-option-grid">
                            ${VIBES.map(v => renderSettingsChoiceCard({
                                title: v.name,
                                subtitle: getVibePreviewCopy(v.id),
                                icon: v.ui.botIcon,
                                selected: state.activeVibe === v.id,
                                onClick: `updateStateSetting('activeVibe', '${v.id}')`
                            })).join('')}
                        </div>
                        ${state.activeVibe === 'custom' ? `
                            <div class="settings-field-card settings-field-card-wide mt-4">
                                <span class="settings-field-label">Instrucciones de personalidad</span>
                                <textarea oninput="updateTextSetting('customVibePrompt', this.value)" class="w-full h-28 md:h-32 px-3 py-3 text-[12px] md:text-[13px] bg-slate-100 dark:bg-black/40 text-slate-900 dark:text-white rounded-xl border border-emerald-500/20 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 custom-scrollbar resize-none transition-all" placeholder="Ejemplo: Eres un pirata espacial del año 3000...">${escapeHTML(state.customVibePrompt)}</textarea>
                                <p class="settings-help-note mt-3">Se guarda automáticamente mientras escribes.</p>
                            </div>
                        ` : ''}
                    </section>
                `;
            } else if (t === 'battle') {
                if (!isMobile) {
                    html += renderSettingsSignalGrid([
                        renderSettingsSignalCard({ label: 'Modo', value: getArenaModeLabel(state.arenaMode), detail: 'dinámica actual', icon: 'swords', tone: 'amber' }),
                        renderSettingsSignalCard({ label: 'Oponente', value: getVibe(state.agent2Vibe).name, detail: 'segundo agente', icon: getVibe(state.agent2Vibe).ui.botIcon, tone: 'rose' }),
                        renderSettingsSignalCard({ label: 'Modelo 2', value: (state.agent2Model || state.modelId || 'gemini-2.5-flash').replace('gemini-', 'Gemini '), detail: 'motor secundario', icon: 'cpu', tone: 'indigo' })
                    ]);
                }

                html += `
                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Dinámica de arena</h4>
                                <p class="settings-section-description">Ordena la interacción competitiva con una lectura más clara y comparativa.</p>
                            </div>
                        </div>
                        ${renderSettingsSegment('arenaMode', [
                            { value: 'debate', label: 'Pelea', icon: 'swords' },
                            { value: 'chat', label: 'Amistad', icon: 'coffee' },
                            { value: 'trio', label: 'Trío', icon: 'heart' },
                            { value: 'coop', label: 'Equipo', icon: 'users' }
                        ])}
                    </section>

                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Agente oponente</h4>
                                <p class="settings-section-description">Escoge la personalidad que acompaña o enfrenta al asistente principal.</p>
                            </div>
                        </div>
                        <div class="settings-option-grid">
                            ${VIBES.map(v => renderSettingsChoiceCard({
                                title: v.name,
                                subtitle: getVibePreviewCopy(v.id),
                                icon: v.ui.botIcon,
                                selected: state.agent2Vibe === v.id,
                                onClick: `updateStateSetting('agent2Vibe', '${v.id}')`
                            })).join('')}
                        </div>
                    </section>

                    <section class="settings-section">
                        <div class="settings-section-head">
                            <div>
                                <h4 class="settings-section-title">Modelo secundario</h4>
                                <p class="settings-section-description">Define con qué motor corre el segundo participante dentro del modo Arena.</p>
                            </div>
                        </div>
                        <div class="settings-option-grid">
                            ${MODELS.map(m => renderSettingsChoiceCard({
                                title: m.name,
                                subtitle: m.id,
                                icon: 'cpu',
                                selected: state.agent2Model === m.id,
                                onClick: `updateStateSetting('agent2Model', '${m.id}')`
                            })).join('')}
                        </div>
                    </section>
                `;
            }

            DOM.settingsContent.innerHTML = html;
            bindMagneticSurfaceFX();
            if (typeof lucide !== 'undefined') lucide.createIcons();
            requestAnimationFrame(bindSettingsMobileSummaryScroll);
        }

        // --- INICIALIZACIÓN ---
        function init() {
            applyTheme();
            initFXCanvas();
            bindHighEndMotion();
            window.addEventListener('resize', () => {
                initFXCanvas();
                handleSettingsViewportChange();
            }, { passive: true });
            if(state.messages.length === 0) {
                state.suggestions = FALLBACK_SUGGESTIONS[state.activeVibe];
                fetchSmartSuggestions();
            }
            renderMessages();
            renderSessionsList();
            updateAppTitle();
            
            // Iniciar Motor de Reacción UI
            requestAnimationFrame(renderReactiveUI);
            
            setInterval(() => {
                const ping = Math.floor(Math.random() * 30 + 10);
                const el = document.getElementById('ping-label');
                const icon = document.getElementById('wifi-icon');
                if (!el || !icon) return;
                el.innerText = ping + 'ms';
                if (ping > 35) {
                    el.classList.add('text-yellow-500'); el.classList.remove('text-slate-400');
                    icon.classList.add('text-yellow-500'); icon.classList.remove('text-gray-500');
                } else {
                    el.classList.remove('text-yellow-500'); el.classList.add('text-slate-400');
                    icon.classList.remove('text-yellow-500'); icon.classList.add('text-gray-500');
                }
            }, 3000);
        }

        const PUBLIC_ACTIONS = {
            abortGeneration,
            beginRenameSession,
            cancelRenameSession,
            cancelReply,
            cancelSessionPress,
            closeLightbox,
            closeSessionMenu,
            closeSettings,
            confirmRenameSession,
            copyMsgText,
            deleteSession,
            deleteSessionFromMenu,
            generateReplySuggestions,
            handleImageUpload,
            handleQuickAction,
            handleSend,
            initiateReply,
            loadSession,
            openLightbox,
            openSessionMenu,
            openSettings,
            removePendingImage,
            saveSettings,
            scrollToBottom,
            setInput,
            startNewChat,
            startSessionPress,
            toggleBattleMode,
            toggleZenMode,
            updateApiSetting,
            updateStateSetting,
            updateTextSetting,
            useReplySuggestion,
            showToast
        };

        window.SAOApp = {
            version: '2026.03.30-maintenance',
            state,
            dom: DOM,
            config: window.SAOConfig,
            platform: Platform,
            init,
            persistState,
            actions: PUBLIC_ACTIONS
        };

        Object.assign(window, PUBLIC_ACTIONS, { state });

        document.addEventListener('DOMContentLoaded', init);
