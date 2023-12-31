(() => {
	const refs = {
		openModalBtn1: document.querySelector("[data-modal-buy1-open]"),
		openModalBtn2: document.querySelector("[data-modal-buy2-open]"),
		closeModalBtn: document.querySelector("[data-modal-buy-close]"),
		modal: document.querySelector("[data-modal-buy]"),
	};

    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
