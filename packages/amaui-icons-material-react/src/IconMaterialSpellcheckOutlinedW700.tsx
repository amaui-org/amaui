import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpellcheckOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckOutlinedW700'
      short_name='Spellcheck'

      {...props}
    >
      <path d="M14.1 22.8 9.475 18.175 11.55 16.075 14.1 18.625 19.45 13.275 21.525 15.375ZM2.5 16 7.475 3H10.65L15.625 16H12.475L11.375 12.825H6.425L5.325 16ZM7.175 10.65H10.675L8.975 5.775H8.875Z"/>
    </Icon>
  )
});

export default IconMaterialSpellcheckOutlinedW700;
