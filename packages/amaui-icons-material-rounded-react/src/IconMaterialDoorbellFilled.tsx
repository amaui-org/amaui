import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorbellFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellFilled'

      short_name='Doorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q.425 0 .713-.288.287-.287.287-.712h-2q0 .425.288.712.287.288.712.288ZM8.5 16h7q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15H15v-2.35q0-1.1-.6-2-.6-.9-1.65-1.15v-.25q0-.325-.212-.538Q12.325 8.5 12 8.5q-.325 0-.537.212-.213.213-.213.538v.25q-1.05.25-1.65 1.15-.6.9-.6 2V15h-.5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialDoorbellFilled.displayName = 'AmauiIconMaterialDoorbellFilled';

export default IconMaterialDoorbellFilled;
