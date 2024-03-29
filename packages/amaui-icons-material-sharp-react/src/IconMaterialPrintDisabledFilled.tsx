import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledFilled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 18 20.85V21H6v-4H2V8h3.15L1.375 4.225 2.8 2.8l18.4 18.4ZM8 19h8v-.15L12.15 15H8Zm11.85-2H22V8H10.85Zm-10-10-4-4H18v4ZM18 12.5q-.425 0-.712-.288Q17 11.925 17 11.5t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledFilled.displayName = 'AmauiIconMaterialPrintDisabledFilled';

export default IconMaterialPrintDisabledFilled;
