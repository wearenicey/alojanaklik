# Pokretanje localhost

### 1. npm install 
### 2. pokretanje dev gridsome develop bice na `http://localhost:8080`

# Struktura gridsome

### 1. u src folderu layout je podesen osnovni layout za footer i header

### 2. u src folderu staticne stranice su pages koje su izradjene iz vise komponenti koje se pozivaju untar
Stranice savetovaliste novi sad/beograd imaju svoj layout koji se untar njih poziva radi ralicite nav i futera

### 3. u src folderu folder template u njemu se nalaze fajlovi koji dinamicki prikazuju sadrzaj 
To su kategorije i blog post

### 4. u public folderu su slike koje ne obuhvata gridsome sa svojim img pozivom vec se automatski ucitavaju tu idu slike za blog postove 

### 5. Nova stranica
u src folderu folder pages tu se napravi IME_STRANICE.vue

### CSS/SCSS
u src folder nalazi se assets folder u njemu je folder scss u commponents folder se ubacuje iz codyhouse-a style, posle toga se @import odradi u main koji gridsome vuce i kasnije kompresuje.

### Js scrit iz codyhouse
se ubacuju u static folder prekopira se skripta i ubaci u main-header skriptu..skripta mora tako da se ubaci. 

### Proizvodi
se pozivaju preko Airtable, u .env se dodaju AIRTABLE_KEY i AIRTABLE_BASE 


# Deploy to Netlifly

Kada se lokalno odrade promjene pushovati kod na github, netlifly ce odraditi  build ali kad se odradi build potrebno provjeriti i onda pustiti verziju online
