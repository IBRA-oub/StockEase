# 🏪 **Application de Gestion de Stock**

## 🚀 **Fonctionnalités**

### 🔐 **Authentification**
- 🔑 Connexion sécurisée avec un code secret personnel.

### 📦 **Gestion des Produits**
- 📸 Scanner de code-barres avec `expo-camera` pour une identification rapide.
- ⌨️ Saisie manuelle en cas de dysfonctionnement du scanner.
  - ✅ **Produit existant** :
    - ➕ Ajout ou ➖ retrait des quantités en stock.
    - 📃 Affichage des informations (nom, type, prix, quantité disponible...).
  - 🆕 **Produit non existant** :
    - 📄 Formulaire de création avec :
      - 🏷️ Nom, 🏷️ Type, 💲 Prix, 🚛 Fournisseur...
      - 📦 Quantité initiale avec entrepôt concerné.
      - 🖼️ Ajout d'une image.

### 📋 **Liste des Produits**
- 📑 Affichage détaillé avec :
  - 🏷️ Nom, 🏷️ Type, 💲 Prix, 📦 Quantité disponible...
  - 📌 Indicateur d’état du stock :
    - 🔴 Rouge : Stock épuisé.
    - 🟡 Jaune : Faible stock (<10 unités).
- ⚡ Actions disponibles :
  - 🔼 **Réapprovisionner** pour augmenter la quantité.
  - 🔽 **Décharger** pour retirer des unités.

### 🔍 **Filtrage et Recherche**
- 🔤 Recherche par **nom**.
- 📊 Tri dynamique par **prix, nom alphabétique ou quantité**.

### 📊 **Statistiques et Résumé des Stocks**
- 📈 Tableau de bord avec :
  - 📦 Nombre total de produits.
  - 🏙️ Nombre total de villes.
  - ⚠️ Produits en rupture de stock.
  - 💰 Valeur totale des stocks.
  - 🔄 Produits les plus ajoutés/retirés récemment.

### 📜 **Sauvegarde et Export des Données**
- 🖨️ Exportation de rapports PDF avec `expo-print`.

## 🛠️ **Technologies Utilisées**
- 📱 **Frontend Mobile** : React Native, Expo.
- 🏗️ **Backend** : JSON Server pour la gestion des données.
- 🔍 **Scanner** : `expo-camera` pour la lecture des codes-barres.
- 🖨️ **Export PDF** : `expo-print` pour la génération de rapports.

## 📥 **Installation et Exécution du Projet**

1️⃣ **Cloner le projet**
```bash
git clone https://github.com/IBRA-oub/StockEase.git
cd StockEase
```

2️⃣ **Installer les dépendances**
```bash
npm install
```

3️⃣ **Démarrer le JSON server**
```bash
npx json-server db.json
```

4️⃣ **Démarrer le frontend**
```bash
npx expo start
```

5️⃣ **Accéder à l'application**
  - Scan the QR code with expo go or with your camera for IOS
  - Ouvrir un navigateur et aller à : `http://localhost:8081`
