import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalCurrencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyFilled'

      short_name='UniversalCurrency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-560h800v560H80Zm120-200h120q17 0 28.5-11.5T360-440v-70q0-17-11.5-28.5T320-550h-60v-30h100v-60H200v150h100v30H200v60Zm240 80h320v-22q0-45-44-71.5T600-440q-72 0-116 26.5T440-342v22Zm160-160q33 0 56.5-23.5T680-560q0-33-23.5-56.5T600-640q-33 0-56.5 23.5T520-560q0 33 23.5 56.5T600-480Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyFilled.displayName = 'AmauiIconMaterialUniversalCurrencyFilled';

export default IconMaterialUniversalCurrencyFilled;
