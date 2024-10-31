document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sondageForm");
    const resultDiv = document.getElementById("result");
    const satisfactionInput = document.getElementById("satisfaction");
    const satisfactionValue = document.getElementById("satisfactionValue");
    const submitBtn = document.getElementById("submit-btn");
  
    // Mettre à jour la valeur de la satisfaction en temps réel
    satisfactionInput.addEventListener("input", function () {
      satisfactionValue.textContent = satisfactionInput.value + "%";
    });
  
    // Gestion de la soumission du formulaire
    submitBtn.addEventListener("click", function () {
      const nom = document.getElementById("nom").value;//  Récupérer le nom
      const sexe = form.querySelector('input[name="sexe"]:checked');//  Récupérer le sex
      const note = form.querySelector('input[name="note"]:checked');//  Récupérer  note
      const satisfaction = satisfactionInput.value; //  Récupérer satisfaction
      const commentaires = document.getElementById("commentaires").value;
      const accepter = document.getElementById("accepter").checked;
  
      // Vérification des champs obligatoires
      if (!sexe || !note || !accepter) {
        alert("Veuillez remplir tous les champs obligatoires et accepter les termes.");
        return;
      }
  
      // Création du résumé des résultats
      let resultHTML = "<h3>Résultats du Sondage</h3>";
      resultHTML += "<p><strong>Nom :</strong> " + (nom ? nom : "Non renseigné") + "</p>";
      resultHTML += "<p><strong>Sexe :</strong> " + sexe.value + "</p>";
      resultHTML += "<p><strong>Note du produit :</strong> " + note.value + " étoiles</p>";
      resultHTML += "<p><strong>Satisfaction générale :</strong> " + satisfaction + "%</p>";
      resultHTML += "<p><strong>Commentaires :</strong> " + (commentaires ? commentaires : "Aucun commentaire") + "</p>";
      
      resultDiv.innerHTML = resultHTML;
    });
  });
  