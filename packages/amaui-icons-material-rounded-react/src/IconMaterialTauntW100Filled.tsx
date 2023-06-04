import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTauntW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TauntW100Filled'

      short_name='Taunt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 677q-15 8-32.153 3.41-17.153-4.589-26.047-18.664Q147 644 154.5 624q7.5-20 27.5-27l326-114q5-2 10.523.659 5.522 2.659 9.204 9.614Q531 499 529.02 504.962q-1.98 5.961-7.02 9.038L216 677Zm75 221q-24.75 0-42.375-17.625T231 838V712l323.617-169.816Q569 534 574 518.844q5-15.155-2-28.844l167-84q6-3 12-.5t10.706 10.379Q765 421 763.5 426.5T757 436L499 630.784V838q0 24.75-17.625 42.375T439 898H291Zm19-350q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Z"/>
    </Icon>
  );
});

IconMaterialTauntW100Filled.displayName = 'AmauiIconMaterialTauntW100Filled';

export default IconMaterialTauntW100Filled;
