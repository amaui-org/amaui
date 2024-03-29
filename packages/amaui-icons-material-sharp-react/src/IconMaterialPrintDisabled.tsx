import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 18 20.85V21H6v-4H2V8h3.15L1.375 4.225 2.8 2.8l18.4 18.4ZM8 19h8v-.15L12.15 15H8Zm11.85-2-2-2H20v-5h-7.15l-2-2H22v9ZM4 15h2v-2h4.15l-3-3H4Zm12-7V5H7.85l-2-2H18v5Zm2 4.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q18.425 10.5 18 10.5t-.712.287Q17 11.075 17 11.5t.288.712q.287.288.712.288ZM12.85 10H20h-7.15ZM4 10h3.15H4Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabled.displayName = 'AmauiIconMaterialPrintDisabled';

export default IconMaterialPrintDisabled;
