// ne vredi kurcu, bira samo sebe

angular.module('pozor', []);

function VoceKontrol($scope) {
	var voce = this;
    voce.spisak = [
        {'ime': 'jabuka', 'boja': 'crveno'},
		{'ime': 'jagoda', 'boja': 'crveno'},
        {'ime': 'narand�a', 'boja': 'narand�asto'},
        {'ime': 'banana', 'boja': '�uto'}
    ];
}