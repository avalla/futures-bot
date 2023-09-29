# Futures Bot

## Workflow

1. Open a short position on selected pair at market price with TP at 50%.
2. Open 10 short positions at

```
1.Il bot con leva 10x apre un'operazione di vendita (sell) di 1 USDT sulla coppia LINA/USDT al prezzo di mercato (market price).

2.Viene impostato un Take Profit (TP) al 50% per l'operazione aperta sulla coppia LINA/USDT.

3.In contemporanea all'apertura dell'operazione, il bot piazza 10 operazioni di mediazione (pending orders) con le seguenti dimensioni e percentuali di TP:

2 USDT con TP al 50%
4 USDT con TP al 50%
8 USDT con TP al 25%
16 USDT con TP al 25%
32 USDT con TP al 20%
64 USDT con TP al 19%
128 USDT con TP al 18%
256 USDT con TP al 17%
512 USDT con TP al 16%
1028 USDT con TP al 15%

4.Ogni volta che un'operazione o una mediazione raggiunge il suo TP, viene chiusa e immediatamente aperta una nuova operazione con le stesse impostazioni. Prima di aprire la nuova operazione, tutti gli ordini pending rimanenti devono essere cancellati.

5.Non è previsto l'utilizzo di uno stop loss o di ordini di chiusura diversi dal TP.
```

Ciao Andrea, come và? ti lascio le logiche del bot in maniera più descrittiva, corretto per il valore di apertura
delle "mediazioni"(ordini in pending) che ho dato ora a chat GPT e vedo che mi scrive:
Allora ricominciamo tutto da capo.
Scriviamo uno script per il bot con queste logiche, su binance testnet, nei futures il bot con leva 10x apre
un'operazione di vendita (sell) di 5 USDT (valore reale usdt) sulla coppia LINA/USDT al prezzo di mercato (market price)
ed imposta un Take Profit (TP) al 50%. Contemporanea all'apertura dell'operazione, calcola il 15 % in più del prezzo
d'ingresso dell'operazione precedente (entry price) e piazza un'operazione in pending di 10 USDT con take profit (tp) al
50%, contemporaneamente calcola il 15 % in più del prezzo d'ingresso dell'operazione pending precedente e piazza
un'operazione in pending di 20 USDT con take profit (tp) al 50%, calcola il 15 % in più dell'operazione pending
precedente e piazza un'operazione in pending di 40 USDT con take profit (tp) al 25%, calcola il 15 % in più
dell'operazione pending precedente e piazza un'operazione in pending di 80 USDT con take profit (tp) al 25%, calcola il
15 % dell'operazione pending precedente e piazza un'operazione in pending di 160 USDT con take profit (tp) al 20%,
calcola il 15 % in più dell'operazione pending precedente e piazza un'operazione in pending di 320 USDT con take
profit (tp) al 19%, calcola il 15 % dell'operazione pending precedente e piazza un'operazione in pending di 640 USDT con
take profit (tp) al 18%, calcola il 15 % in più dell'operazione pending precedente e piazza un'operazione in pending di
1280 USDT con take profit (tp) al 17%, calcola il 15 % in più dell'operazione pending precedente e piazza un'operazione
in pending di 2560 USDT con take profit (tp) al 16%, calcola il 15 % in più dell'operazione pending precedente e piazza
un'operazione in pending di 5120USDT con take profit (tp) al 15.

Tabella:
Apertura:
5USDT (valore USDT) con TP al 50%
Ordini pending:
10 USDT (valore USDT) con TP al 50%
20 USDT (valore USDT) con TP al 50%
40 USDT (valore USDT) con TP al 25%
80 USDT (valore USDT) con TP al 25%
160 USDT (valore USDT) con TP al 20%
320USDT (valore USDT) con TP al 19%
640 USDT (valore USDT) con TP al 18%
1280 USDT (valore USDT) con TP al 17%
2560 USDT (valore USDT) con TP al 16%
5120 USDT (valore USDT) con TP al 15%

Ogni volta che un'operazione, l'apertuta o l'ordine in pending raggiunge il prezzo dell'operazione in pending
successiva, apre una nuova operazione. Se l'operazione invece non raggiunge l'ordine in pendind successivo, ma il TP,
l'operazione viene chiusa. Ogni volta che il bot chiude un'operazione in TP, cancella tutti gli ordini rimasti in
pending e apre una nuova operazione con le stesse impostazioni, tp, mediazioni e tutto.Non è previsto l'utilizzo di uno
stop loss o di ordini di chiusura diversi dal TP.
magari ti può servire....grazie 🤟😎