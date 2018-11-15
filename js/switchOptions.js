allToSelBtn.onclick = function () { allToSelOrAv(firstSelect, secondSelect); }
allToAvBtn.addEventListener('click', function () { allToSelOrAv(secondSelect, firstSelect) });
toSelBtn.addEventListener('click', function () { toSelOrAv(firstSelect, secondSelect); });
toAvBtn.addEventListener('click', function () { toSelOrAv(secondSelect, firstSelect); });
