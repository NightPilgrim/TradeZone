(function () {
    'use strict';

    var LZString = function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();

    const STORAGE_DEPOSIT = 'tj_deposit';
    const STORAGE_DEPOSITS = 'tj_deposits';
    const STORAGE_TRADES = 'tj_trades';
    const ASSETS = ['BTC/USD', 'ETH/USD', 'EUR/USD', 'Gold'];
    const TRADES_PER_PAGE = 5;

    let tg = null;
    let chart = null;
    let currentTradesPage = 1;
    let viewOnlyMode = false;
    let snapshotDeposits = [];
    let snapshotTrades = [];

    function migrateDepositToDeposits() {
        const oldVal = localStorage.getItem(STORAGE_DEPOSIT);
        if (oldVal === null) return;
        const n = parseFloat(oldVal);
        if (isNaN(n) || n <= 0) {
            localStorage.removeItem(STORAGE_DEPOSIT);
            return;
        }
        const deposits = [{
            id: 'd' + Date.now(),
            amount: n,
            date: formatDate(),
            time: formatTime()
        }];
        localStorage.setItem(STORAGE_DEPOSITS, JSON.stringify(deposits));
        localStorage.removeItem(STORAGE_DEPOSIT);
    }

    function getDeposits() {
        if (viewOnlyMode) return snapshotDeposits;
        try {
            const raw = localStorage.getItem(STORAGE_DEPOSITS);
            const arr = raw ? JSON.parse(raw) : [];
            return Array.isArray(arr) ? arr : [];
        } catch (_) {
            return [];
        }
    }

    function saveDeposits(deposits) {
        if (viewOnlyMode) return;
        localStorage.setItem(STORAGE_DEPOSITS, JSON.stringify(deposits));
    }

    function addDeposit(amount) {
        const n = parseFloat(amount);
        if (isNaN(n) || n < 0) return false;
        const deposits = getDeposits();
        deposits.push({
            id: 'd' + Date.now() + '_' + Math.random().toString(36).slice(2, 9),
            amount: n,
            date: formatDate(),
            time: formatTime()
        });
        saveDeposits(deposits);
        return true;
    }

    function removeDeposit(id) {
        const deposits = getDeposits().filter(d => d.id !== id);
        saveDeposits(deposits);
    }

    function getTg() {
        if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
            return Telegram.WebApp;
        }
        return null;
    }

    function initTelegram() {
        tg = getTg();
        if (tg) {
            tg.ready();
            tg.expand();
        }
        applyDarkTheme();
    }

    function applyDarkTheme() {
        document.body.style.backgroundColor = '#1c1c1e';
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#1c1c1e');
        document.documentElement.style.setProperty('--tg-theme-text-color', '#f2f2f7');
        document.documentElement.style.setProperty('--tg-theme-hint-color', '#8e8e93');
        document.documentElement.style.setProperty('--tg-theme-link-color', '#0a84ff');
        document.documentElement.style.setProperty('--tg-theme-button-color', '#0a84ff');
        document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff');
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2c2c2e');
    }

    function getDeposit() {
        return getDeposits().reduce(function (sum, d) {
            const n = parseNum(d.amount);
            return sum + (isNaN(n) ? 0 : n);
        }, 0);
    }

    function setDeposit(value) {
        var n = parseFloat(value);
        if (isNaN(n) || n < 0) return false;
        saveDeposits(n === 0 ? [] : [{ id: 'd' + Date.now(), amount: n, date: formatDate(), time: formatTime() }]);
        return true;
    }

    function getTrades() {
        if (viewOnlyMode) return snapshotTrades;
        try {
            const raw = localStorage.getItem(STORAGE_TRADES);
            const arr = raw ? JSON.parse(raw) : [];
            return Array.isArray(arr) ? arr : [];
        } catch (_) {
            return [];
        }
    }

    function saveTrades(trades) {
        if (viewOnlyMode) return;
        localStorage.setItem(STORAGE_TRADES, JSON.stringify(trades));
    }

    function nextId() {
        return 't' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    }

    function parseNum(val) {
        if (val === '' || val === null || val === undefined) return NaN;
        const n = parseFloat(String(val).replace(',', '.'));
        return isNaN(n) ? NaN : n;
    }

    function formatDate(d) {
        const dt = d ? new Date(d) : new Date();
        const y = dt.getFullYear();
        const m = String(dt.getMonth() + 1).padStart(2, '0');
        const day = String(dt.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    function formatTime(d) {
        const dt = d ? new Date(d) : new Date();
        return String(dt.getHours()).padStart(2, '0') + ':' + String(dt.getMinutes()).padStart(2, '0');
    }

    function formatDateShort(dateStr, timeStr) {
        if (!dateStr) return '—';
        const t = timeStr ? ' ' + timeStr : '';
        return dateStr + t;
    }

    function formatResult(num) {
        const n = parseNum(num);
        if (isNaN(n)) return '0';
        const sign = n >= 0 ? '+' : '';
        return sign + n;
    }

    function updateBalance() {
        const deposit = getDeposit();
        const trades = getTrades();
        const sum = trades.reduce((acc, t) => {
            const r = parseNum(t.result);
            return acc + (isNaN(r) ? 0 : r);
        }, 0);
        const balance = deposit + sum;
        const totalPoints = trades.reduce((acc, t) => {
            const p = parseNum(t.points);
            return acc + (isNaN(p) ? 0 : p);
        }, 0);
        const pctFromDeposit = deposit > 0 ? ((balance - deposit) / deposit) * 100 : 0;

        const el = document.getElementById('balance-value');
        if (el) {
            el.textContent = balance.toFixed(2);
            el.classList.remove('profit', 'loss', 'neutral');
            if (balance > deposit) el.classList.add('profit');
            else if (balance < deposit) el.classList.add('loss');
            else el.classList.add('neutral');
        }
        const pctEl = document.getElementById('balance-pct');
        if (pctEl) {
            var pctStr = deposit > 0 ? (pctFromDeposit >= 0 ? '+ ' : '- ') + Math.abs(pctFromDeposit).toFixed(1) + '%' : '0%';
            pctEl.textContent = pctStr;
            pctEl.classList.remove('profit', 'loss', 'neutral');
            if (pctFromDeposit > 0) pctEl.classList.add('profit');
            else if (pctFromDeposit < 0) pctEl.classList.add('loss');
            else pctEl.classList.add('neutral');
        }
        const pointsEl = document.getElementById('balance-points');
        if (pointsEl) {
            pointsEl.textContent = (totalPoints >= 0 ? '+ ' : '- ') + Math.abs(Math.round(totalPoints)) + ' пт';
            pointsEl.classList.remove('profit', 'loss', 'neutral');
            if (totalPoints > 0) pointsEl.classList.add('profit');
            else if (totalPoints < 0) pointsEl.classList.add('loss');
            else pointsEl.classList.add('neutral');
        }
    }

    function getBalanceData() {
        const deposit = getDeposit();
        const trades = getTrades().slice().sort((a, b) => {
            const da = (a.date || '') + 'T' + (a.time || '00:00');
            const db = (b.date || '') + 'T' + (b.time || '00:00');
            return new Date(da) - new Date(db);
        });
        const points = [{ x: 0, y: deposit, label: 'Депозит' }];
        let running = deposit;
        trades.forEach((t, i) => {
            const r = parseNum(t.result);
            running += isNaN(r) ? 0 : r;
            points.push({
                x: i + 1,
                y: running,
                label: (t.date || '') + ' ' + (t.asset || '')
            });
        });
        return points;
    }

    function renderChart() {
        const canvas = document.getElementById('balance-chart');
        if (!canvas) return;
        const points = getBalanceData();
        const ctx = canvas.getContext('2d');

        if (chart) chart.destroy();
        const deposit = getDeposit();
        const trades = getTrades();
        const sum = trades.reduce((a, t) => a + (parseNum(t.result) || 0), 0);
        const lastBalance = deposit + sum;
        const isProfit = lastBalance >= deposit;

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: points.map((p, i) => i === 0 ? 'Старт' : (p.label || String(p.x))),
                datasets: [{
                    label: 'Баланс',
                    data: points.map(p => p.y),
                    borderColor: isProfit ? 'rgb(52, 199, 89)' : 'rgb(255, 59, 48)',
                    backgroundColor: (isProfit ? 'rgba(52, 199, 89, 0.1)' : 'rgba(255, 59, 48, 0.1)'),
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { maxTicksLimit: 8, maxRotation: 45 }
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    function getFilterAsset() {
        const sel = document.getElementById('filter-asset');
        return sel ? sel.value : '';
    }

    function getSortedTrades() {
        const trades = getTrades().slice();
        trades.sort((a, b) => {
            const da = (a.date || '') + 'T' + (a.time || '00:00');
            const db = (b.date || '') + 'T' + (b.time || '00:00');
            return new Date(db) - new Date(da);
        });
        return trades;
    }

    function getFilteredTrades() {
        const filter = getFilterAsset();
        let list = getSortedTrades();
        if (filter) list = list.filter(t => (t.asset || '').trim() === filter);
        return list;
    }

    function resultClass(result) {
        const n = parseNum(result);
        if (isNaN(n) || n === 0) return 'zero';
        return n > 0 ? 'positive' : 'negative';
    }

    function createTradeCard(trade, expanded, viewOnly) {
        const isExpanded = !!expanded;
        const readOnly = !!viewOnly;
        const card = document.createElement('div');
        card.className = 'trade-card ' + (isExpanded ? '' : 'collapsed ') + resultClass(trade.result);
        card.dataset.id = trade.id;
        card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

        const resultNum = parseNum(trade.result);
        const resultStr = isNaN(resultNum) ? '0' : (resultNum >= 0 ? '+' : '') + resultNum;
        const pointsNum = parseNum(trade.points);
        const pointsStr = (trade.points !== undefined && trade.points !== '') ? (isNaN(pointsNum) ? trade.points : (pointsNum >= 0 ? '+' : '') + pointsNum + ' пт') : '';

        const header = document.createElement('div');
        header.className = 'trade-header';
        header.innerHTML =
            '<span class="toggle-icon" aria-hidden="true">' + (isExpanded ? '▼' : '▶') + '</span>' +
            '<div class="trade-header-summary">' +
            '<span class="trade-date-short">' + formatDateShort(trade.date, trade.time) + '</span>' +
            '<span class="trade-asset-short">' + (trade.asset || '—') + '</span>' +
            '<span class="trade-result-short ' + resultClass(trade.result) + '">' + resultStr + '</span>' +
            (pointsStr ? '<span class="trade-points-short">' + pointsStr + '</span>' : '') +
            '</div>';
        header.addEventListener('click', function () {
            card.classList.toggle('collapsed');
            card.setAttribute('aria-expanded', card.classList.contains('collapsed') ? 'false' : 'true');
            const icon = card.querySelector('.toggle-icon');
            if (icon) icon.textContent = card.classList.contains('collapsed') ? '▶' : '▼';
        });

        const body = document.createElement('div');
        body.className = 'trade-body';

        if (readOnly) {
            const sizeVal = (trade.positionSize !== undefined && trade.positionSize !== '') ? trade.positionSize : '0.1';
            body.innerHTML =
                '<div class="trade-fields trade-fields-readonly">' +
                '<div class="trade-field trade-field-row">' +
                '<div class="trade-field"><span class="trade-label">Дата</span><span class="trade-value">' + (trade.date || '—') + '</span></div>' +
                '<div class="trade-field"><span class="trade-label">Время</span><span class="trade-value">' + (trade.time || '—') + '</span></div>' +
                '</div>' +
                '<div class="trade-field"><span class="trade-label">Актив</span><span class="trade-value">' + (trade.asset || '—') + '</span></div>' +
                '<div class="trade-field"><span class="trade-label">Результат</span><span class="trade-value ' + resultClass(trade.result) + '">' + resultStr + '</span></div>' +
                '<div class="trade-field"><span class="trade-label">Пункты</span><span class="trade-value">' + (pointsStr || '—') + '</span></div>' +
                '<div class="trade-field"><span class="trade-label">Размер позиции</span><span class="trade-value">' + sizeVal + '</span></div>' +
                '</div>';
        } else {
            const dateId = 'date-' + trade.id;
            const timeId = 'time-' + trade.id;
            const assetId = 'asset-' + trade.id;
            const resultId = 'result-' + trade.id;
            const pointsId = 'points-' + trade.id;
            const sizeId = 'size-' + trade.id;

            body.innerHTML =
                '<div class="trade-fields">' +
                '<div class="trade-field trade-field-row">' +
                '<div class="trade-field"><label for="' + dateId + '">Дата</label><input type="date" id="' + dateId + '" class="input" value="' + (trade.date || formatDate()) + '"></div>' +
                '<div class="trade-field"><label for="' + timeId + '">Время</label><input type="time" id="' + timeId + '" class="input" value="' + (trade.time || formatTime()) + '"></div>' +
                '</div>' +
                '<div class="trade-field">' +
                '<label for="' + assetId + '">Актив</label>' +
                '<select id="' + assetId + '" class="select trade-asset-select">' +
                '<option value="">— Выберите —</option>' +
                ASSETS.map(a => '<option value="' + a + '"' + (trade.asset === a ? ' selected' : '') + '>' + a + '</option>').join('') +
                '<option value="__custom__">Свой вариант...</option>' +
                '</select>' +
                '<input type="text" id="' + assetId + '-custom" class="input trade-asset-custom" placeholder="Введите актив" value="' + (ASSETS.includes(trade.asset) ? '' : (trade.asset || '')) + '" style="' + (ASSETS.includes(trade.asset) ? 'display:none' : '') + '">' +
                '</div>' +
                '<div class="trade-field">' +
                '<label for="' + resultId + '">Результат (±)</label>' +
                '<input type="number" id="' + resultId + '" class="input" step="0.01" inputmode="decimal" value="' + (trade.result !== undefined && trade.result !== '' ? trade.result : '') + '" placeholder="+100 или -50">' +
                '</div>' +
                '<div class="trade-field">' +
                '<label for="' + pointsId + '">Результат в пунктах</label>' +
                '<input type="number" id="' + pointsId + '" class="input" step="1" inputmode="numeric" value="' + (trade.points !== undefined && trade.points !== '' ? trade.points : '') + '" placeholder="+25 или -15">' +
                '</div>' +
                '<div class="trade-field">' +
                '<label for="' + sizeId + '">Размер позиции (опц.)</label>' +
                '<input type="number" id="' + sizeId + '" class="input" step="0.01" min="0" inputmode="decimal" value="' + (trade.positionSize !== undefined && trade.positionSize !== '' ? trade.positionSize : '0.1') + '" placeholder="0.1">' +
                '</div>' +
                '</div>' +
                '<div class="trade-actions">' +
                '<button type="button" class="btn btn-primary btn-save-trade">Сохранить</button>' +
                '<button type="button" class="btn btn-danger btn-delete-trade">Удалить</button>' +
                '</div>';

            const assetSelect = body.querySelector('.trade-asset-select');
            const assetCustom = body.querySelector('.trade-asset-custom');
            if (assetSelect && assetCustom) {
                assetSelect.addEventListener('change', function () {
                    const isCustom = assetSelect.value === '__custom__';
                    assetCustom.style.display = isCustom ? 'block' : 'none';
                    if (!isCustom) assetCustom.value = '';
                });
            }

            function updateCardHeader() {
                const dateEl = document.getElementById(dateId);
                const timeEl = document.getElementById(timeId);
                const resultEl = document.getElementById(resultId);
                let asset = assetSelect ? assetSelect.value : '';
                if (asset === '__custom__' && assetCustom) asset = assetCustom.value.trim() || asset;
                const resultVal = resultEl ? resultEl.value : trade.result;
                const resultNum = parseNum(resultVal);
                const resultStr = isNaN(resultNum) ? '0' : (resultNum >= 0 ? '+' : '') + resultNum;
                const pointsEl = document.getElementById(pointsId);
                const pointsVal = pointsEl ? pointsEl.value : trade.points;
                const pointsNum = parseNum(pointsVal);
                const pointsStr = (pointsVal !== undefined && pointsVal !== '') ? (isNaN(pointsNum) ? pointsVal : (pointsNum >= 0 ? '+' : '') + pointsNum + ' пт') : '';
                const summary = card.querySelector('.trade-header-summary');
                if (summary) {
                    summary.innerHTML =
                        '<span class="trade-date-short">' + formatDateShort(dateEl ? dateEl.value : trade.date, timeEl ? timeEl.value : trade.time) + '</span>' +
                        '<span class="trade-asset-short">' + (asset || '—') + '</span>' +
                        '<span class="trade-result-short ' + resultClass(resultVal) + '">' + resultStr + '</span>' +
                        (pointsStr ? '<span class="trade-points-short">' + pointsStr + '</span>' : '');
                }
                card.className = 'trade-card ' + resultClass(resultVal) + (card.classList.contains('collapsed') ? ' collapsed' : '');
            }

            function collectAndSave() {
                const dateEl = document.getElementById(dateId);
                const timeEl = document.getElementById(timeId);
                const resultEl = document.getElementById(resultId);
                const pointsEl = document.getElementById(pointsId);
                const sizeEl = document.getElementById(sizeId);
                let asset = assetSelect ? assetSelect.value : '';
                if (asset === '__custom__' && assetCustom) asset = assetCustom.value.trim() || asset;
                const trades = getTrades();
                const idx = trades.findIndex(t => t.id === trade.id);
                if (idx === -1) return;
                trades[idx] = {
                    id: trade.id,
                    date: dateEl ? dateEl.value : trade.date,
                    time: timeEl ? timeEl.value : trade.time,
                    asset: asset,
                    result: resultEl ? resultEl.value : trade.result,
                    points: pointsEl ? pointsEl.value : trade.points,
                    positionSize: sizeEl ? sizeEl.value : trade.positionSize
                };
                saveTrades(trades);
                updateBalance();
                renderChart();
                updateCardHeader();
            }

            [dateId, timeId, resultId, pointsId, sizeId].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', collectAndSave);
            });
            if (assetSelect) assetSelect.addEventListener('change', collectAndSave);
            if (assetCustom) assetCustom.addEventListener('blur', collectAndSave);

            const saveBtn = body.querySelector('.btn-save-trade');
            if (saveBtn) {
                saveBtn.addEventListener('click', function () {
                    collectAndSave();
                    if (typeof Telegram !== 'undefined' && Telegram.WebApp && Telegram.WebApp.showPopup) {
                        Telegram.WebApp.showPopup({ title: 'Сохранено', message: 'Сделка обновлена.' });
                    }
                });
            }

            const delBtn = body.querySelector('.btn-delete-trade');
            if (delBtn) {
                delBtn.addEventListener('click', function () {
                    card.classList.add('removing');
                    setTimeout(function () {
                        const trades = getTrades().filter(t => t.id !== trade.id);
                        saveTrades(trades);
                        updateBalance();
                        renderChart();
                        renderTradesList();
                    }, 260);
                });
            }
        }

        card.appendChild(header);
        card.appendChild(body);
        return card;
    }

    function getTotalPages() {
        const list = getFilteredTrades();
        return Math.max(1, Math.ceil(list.length / TRADES_PER_PAGE));
    }

    function renderTradesList(expandTradeId) {
        refreshFilterAssets();
        const container = document.getElementById('trades-list');
        if (!container) return;
        const list = getFilteredTrades();
        const totalPages = Math.max(1, Math.ceil(list.length / TRADES_PER_PAGE));
        if (currentTradesPage > totalPages) currentTradesPage = totalPages;
        const start = (currentTradesPage - 1) * TRADES_PER_PAGE;
        const pageList = list.slice(start, start + TRADES_PER_PAGE);

        container.innerHTML = '';
        const listWrap = document.createElement('div');
        listWrap.className = 'trades-list-inner';
        if (list.length === 0) {
            listWrap.innerHTML = '<div class="trades-empty">Нет сделок. Нажмите «Добавить сделку».</div>';
            container.appendChild(listWrap);
            return;
        }
        pageList.forEach(function (t) {
            listWrap.appendChild(createTradeCard(t, t.id === expandTradeId, viewOnlyMode));
        });
        container.appendChild(listWrap);

        var pagination = document.createElement('div');
        pagination.className = 'pagination';
        pagination.innerHTML =
            '<button type="button" class="btn btn-secondary btn-page-prev" ' + (currentTradesPage <= 1 ? ' disabled' : '') + '>Предыдущая</button>' +
            '<span class="pagination-info">Страница ' + currentTradesPage + ' из ' + totalPages + '</span>' +
            '<button type="button" class="btn btn-primary btn-page-more">Следующая</button>';
        var prevBtn = pagination.querySelector('.btn-page-prev');
        var moreBtn = pagination.querySelector('.btn-page-more');
        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                if (currentTradesPage <= 1) return;
                currentTradesPage--;
                renderTradesList();
            });
        }
        if (moreBtn) {
            moreBtn.addEventListener('click', function () {
                if (currentTradesPage >= totalPages) return;
                currentTradesPage++;
                renderTradesList();
            });
            moreBtn.disabled = currentTradesPage >= totalPages;
        }
        container.appendChild(pagination);
    }

    function addTrade() {
        const trades = getTrades();
        const newTrade = {
            id: nextId(),
            date: formatDate(),
            time: formatTime(),
            asset: '',
            result: '',
            points: '',
            positionSize: '0.1'
        };
        trades.unshift(newTrade);
        saveTrades(trades);
        updateBalance();
        renderChart();
        renderTradesList(newTrade.id);
    }

    function addDepositFromInput() {
        const input = document.getElementById('deposit-input');
        if (!input) return;
        const val = input.value.trim();
        const n = parseNum(val);
        if (val === '' || isNaN(n) || n < 0) {
            input.classList.add('invalid');
            if (tg && tg.showAlert) tg.showAlert('Введите корректную сумму депозита (≥ 0).');
            else alert('Введите корректную сумму депозита (≥ 0).');
            return;
        }
        input.classList.remove('invalid');
        addDeposit(n);
        input.value = '';
        updateBalance();
        renderChart();
        renderDepositsList();
        if (tg && tg.showPopup) {
            tg.showPopup({ title: 'Готово', message: 'Депозит добавлен.' });
        }
    }

    function clearHistory() {
        const ok = confirm('Удалить все сделки? Депозит не изменится.');
        if (!ok) return;
        saveTrades([]);
        updateBalance();
        renderChart();
        renderTradesList();
        if (tg && tg.showPopup) tg.showPopup({ title: 'Готово', message: 'История очищена.' });
    }

    function clearAllData() {
        const ok = confirm('Удалить все данные? Будут удалены все сделки и все депозиты. Это действие нельзя отменить.');
        if (!ok) return;
        saveTrades([]);
        saveDeposits([]);
        var depositInput = document.getElementById('deposit-input');
        if (depositInput) depositInput.value = '';
        updateBalance();
        renderChart();
        renderTradesList();
        renderDepositsList();
        if (tg && tg.showPopup) tg.showPopup({ title: 'Готово', message: 'Все данные удалены.' });
    }

    function exportJson() {
        const data = {
            deposits: getDeposits(),
            totalDeposit: getDeposit(),
            trades: getSortedTrades(),
            exportedAt: new Date().toISOString()
        };
        const str = JSON.stringify(data, null, 2);
        const blob = new Blob([str], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'trading-journal-' + formatDate().replace(/-/g, '') + '.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    function getShareUrl() {
        const payload = { d: getDeposits(), t: getTrades() };
        const jsonStr = JSON.stringify(payload);
        const base = location.origin + location.pathname;
        const hash = LZString.compressToEncodedURIComponent(jsonStr);
        return base + '?view=1#' + hash;
    }

    function shareResult() {
        const deposit = getDeposit();
        const trades = getTrades();
        const sum = trades.reduce((a, t) => a + (parseNum(t.result) || 0), 0);
        const balance = deposit + sum;
        const text =
            '📊 Итоги TradeZone\n' +
            'Депозит: ' + deposit.toFixed(2) + '\n' +
            'Сделок: ' + trades.length + '\n' +
            'Текущий баланс: ' + balance.toFixed(2) + '\n' +
            (balance >= deposit ? '✅ В плюсе' : '📉 В минусе');
        const shareUrl = getShareUrl();
        if (tg && tg.openTelegramLink) {
            tg.openTelegramLink('https://t.me/share/url?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(text));
        } else if (navigator.share) {
            navigator.share({
                title: 'TradeZone',
                text: text,
                url: shareUrl
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(text + '\n' + shareUrl).then(function () {
                if (tg && tg.showPopup) tg.showPopup({ title: 'Скопировано', message: 'Текст итогов скопирован в буфер.' });
                else alert('Текст скопирован в буфер обмена.');
            });
        }
    }

    function closeApp() {
        if (tg && tg.close) tg.close();
        else window.close();
    }

    function renderDepositsList() {
        const container = document.getElementById('deposits-list');
        const countEl = document.getElementById('deposits-count');
        if (countEl) countEl.textContent = '(' + getDeposits().length + ')';
        if (!container) return;
        const list = getDeposits().slice().reverse();
        container.innerHTML = '';
        if (list.length === 0) {
            container.innerHTML = '<div class="deposits-empty">Нет депозитов. Добавьте первый.</div>';
            return;
        }
        list.forEach(function (d) {
            const row = document.createElement('div');
            row.className = 'deposit-item';
            const amount = parseNum(d.amount);
            const amountStr = isNaN(amount) ? '0' : amount.toFixed(2);
            const delBtnHtml = viewOnlyMode ? '' : '<button type="button" class="btn btn-danger btn-sm btn-remove-deposit" data-id="' + d.id + '" title="Удалить">×</button>';
            row.innerHTML =
                '<span class="deposit-item-date">' + formatDateShort(d.date, d.time) + '</span>' +
                '<span class="deposit-item-amount">' + amountStr + '</span>' +
                delBtnHtml;
            var delBtn = row.querySelector('.btn-remove-deposit');
            if (delBtn) {
                delBtn.addEventListener('click', function () {
                    removeDeposit(d.id);
                    updateBalance();
                    renderChart();
                    renderDepositsList();
                });
            }
            container.appendChild(row);
        });
    }

    function initDepositsHistoryToggle() {
        const wrap = document.getElementById('deposits-history-wrap');
        const toggle = document.getElementById('deposits-history-toggle');
        if (!wrap || !toggle) return;
        toggle.addEventListener('click', function () {
            wrap.classList.toggle('collapsed');
            var icon = wrap.querySelector('.deposits-history-toggle-icon');
            if (icon) icon.textContent = wrap.classList.contains('collapsed') ? '▶' : '▼';
        });
    }

    function bindEvents() {
        const addDepositBtn = document.getElementById('set-deposit-btn');
        if (addDepositBtn) addDepositBtn.addEventListener('click', addDepositFromInput);

        const depositInput = document.getElementById('deposit-input');
        if (depositInput) depositInput.addEventListener('input', function () { this.classList.remove('invalid'); });

        document.getElementById('add-trade-btn')?.addEventListener('click', addTrade);
        document.getElementById('clear-history-btn')?.addEventListener('click', clearHistory);
        document.getElementById('clear-all-btn')?.addEventListener('click', clearAllData);
        document.getElementById('export-json-btn')?.addEventListener('click', exportJson);
        document.getElementById('share-result-btn')?.addEventListener('click', shareResult);
        document.getElementById('close-app-btn')?.addEventListener('click', closeApp);

        const filterAsset = document.getElementById('filter-asset');
        if (filterAsset) {
            filterAsset.addEventListener('change', function () {
                currentTradesPage = 1;
                renderTradesList();
            });
        }
    }

    function refreshFilterAssets() {
        const sel = document.getElementById('filter-asset');
        if (!sel) return;
        const current = sel.value;
        const assets = ASSETS.slice();
        getTrades().forEach(t => {
            const a = (t.asset || '').trim();
            if (a && !assets.includes(a)) assets.push(a);
        });
        sel.innerHTML = '<option value="">Все активы</option>' + assets.map(a => '<option value="' + a + '">' + a + '</option>').join('');
        if (assets.includes(current)) sel.value = current;
    }

    function parseViewOnlyFromUrl() {
        const params = new URLSearchParams(location.search);
        if (params.get('view') !== '1') return;
        const hash = location.hash.slice(1);
        if (!hash) {
            viewOnlyMode = true;
            return;
        }
        try {
            let jsonStr = LZString.decompressFromEncodedURIComponent(hash);
            if (!jsonStr) jsonStr = decodeURIComponent(hash);
            const data = JSON.parse(jsonStr);
            snapshotDeposits = Array.isArray(data.d) ? data.d : [];
            snapshotTrades = Array.isArray(data.t) ? data.t : [];
            viewOnlyMode = true;
        } catch (_) {
            viewOnlyMode = false;
        }
    }

    function applyViewOnlyUI() {
        if (!viewOnlyMode) return;
        document.body.classList.add('view-only');
        var badge = document.createElement('div');
        badge.className = 'view-only-badge';
        badge.textContent = 'Только просмотр';
        document.getElementById('app')?.insertBefore(badge, document.getElementById('app').firstChild);
    }

    function init() {
        parseViewOnlyFromUrl();
        initTelegram();
        if (!viewOnlyMode) migrateDepositToDeposits();
        updateBalance();
        renderChart();
        renderDepositsList();
        renderTradesList();
        initDepositsHistoryToggle();
        bindEvents();
        applyViewOnlyUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
