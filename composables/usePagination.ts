import { ref } from 'vue';

export const usePagination = (amountBtn: number) => {
  const buttonsInfo = ref(Array.from({ length: amountBtn }, (_, i) => i + 1));
  const currentPage = ref(1);

  const handlePrevBtn = () => {
    if (currentPage.value === 1) {
      return;
    }

    if (currentPage.value === buttonsInfo.value[0]) {
      buttonsInfo.value = buttonsInfo.value.map((num) => num - 1);
    }

    currentPage.value -= 1;
  };

  const handleNextBtn = (amountPages: number) => {
    if (currentPage.value === amountPages) {
      return;
    }

    const lastNumber = buttonsInfo.value[buttonsInfo.value.length - 1];

    if (currentPage.value === lastNumber) {
      buttonsInfo.value = buttonsInfo.value.map((num) => num + 1);
    }

    currentPage.value += 1;
  };

  const handleClickBtn = (page: number) => {
    currentPage.value = page;
  };

  return { buttonsInfo, currentPage, handlePrevBtn, handleNextBtn, handleClickBtn };
};
