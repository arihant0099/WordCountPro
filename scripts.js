// JS remains the same for the counter functionality

        const textInput = document.getElementById('text-input');
        const wordStat = document.querySelector('#word-stat .stat-value');
        const characterStat = document.querySelector('#character-stat .stat-value');
        const sentenceStat = document.querySelector('#sentence-stat .stat-value');
        const paragraphStat = document.querySelector('#paragraph-stat .stat-value');

        function updateDisplay(element, count) {
            element.textContent = count.toLocaleString();
        }

        function analyzeText() {
            const text = textInput.value;
            const charCount = text.length;

            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            const wordCount = words.length;

            const sentenceMatches = text.trim().match(/[^.!?]+[.!?]+/g);
            let sentenceCount = sentenceMatches ? sentenceMatches.length : 0;
            
            if (charCount > 0 && sentenceCount === 0) {
                 const basicSentenceCount = text.trim().split(/[.!?]/).filter(s => s.trim().length > 0).length;
                 sentenceCount = Math.max(sentenceCount, basicSentenceCount);
            }

            const paragraphs = text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0);
            const paragraphCount = paragraphs.length;

            updateDisplay(wordStat, wordCount);
            updateDisplay(characterStat, charCount);
            updateDisplay(sentenceStat, sentenceCount);
            updateDisplay(paragraphStat, paragraphCount);
        }

        textInput.addEventListener('input', analyzeText);
        analyzeText();