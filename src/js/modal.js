(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		openModalBtn1: document.querySelector("[data-modal1-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.openModalBtn1.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();

(() => {
	const refs = {
		openModalBtn2: document.querySelector("[data-modal2-open]"),
		openModalBtn22: document.querySelector("[data-modal22-open]"),
		openModalBtn222: document.querySelector("[data-modal222-open]"),
		closeModalBtn2: document.querySelector("[data-modal2-close]"),
		modal2: document.querySelector("[data-modal2]"),
	};

	refs.openModalBtn2.addEventListener("click", toggleModal);
	refs.openModalBtn22.addEventListener("click", toggleModal);
	refs.openModalBtn222.addEventListener("click", toggleModal);
	refs.closeModalBtn2.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal2.classList.toggle("is-hidden");
	}
})();

(() => {
	const refs = {
		openModalBtn3: document.querySelector("[data-modal3-open]"),
		closeModalBtn3: document.querySelector("[data-modal3-close]"),
		modal3: document.querySelector("[data-modal3]"),
	};

	refs.openModalBtn3.addEventListener("click", toggleModal);
	refs.closeModalBtn3.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal3.classList.toggle("is-hidden");
	}
})();

(() => {
	const refs = {
		openModalBtn4: document.querySelector("[data-modal4-open]"),
		closeModalBtn4: document.querySelector("[data-modal4-close]"),
		modal4: document.querySelector("[data-modal4]"),
	};

	refs.openModalBtn4.addEventListener("click", toggleModal);
	refs.closeModalBtn4.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal4.classList.toggle("is-hidden");
	}
})();

(() => {
	const refs = {
		openModalBtn5: document.querySelector("[data-modal5-open]"),
		closeModalBtn5: document.querySelector("[data-modal5-close]"),
		modal5: document.querySelector("[data-modal5]"),
	};

	refs.openModalBtn5.addEventListener("click", toggleModal);
	refs.closeModalBtn5.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal5.classList.toggle("is-hidden");
	}
})();