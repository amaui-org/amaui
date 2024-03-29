import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsOff'

      short_name='HlsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.825 15 15.9 13.075q.075-.05.15-.063.075-.012.2-.012.275 0 .45.137.175.138.275.363H19v-1h-2.5q-.425 0-.713-.288-.287-.287-.287-.712V10q0-.425.287-.713Q16.075 9 16.5 9h3q.425 0 .712.287.288.288.288.713v.25q0 .325-.212.537-.213.213-.538.213-.25 0-.45-.137-.2-.138-.25-.363H17v1h2.5q.425 0 .712.287.288.288.288.713V14q0 .425-.288.712-.287.288-.712.288ZM3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25v-4.5q0-.325.213-.538Q3.425 9 3.75 9q.325 0 .537.212.213.213.213.538V11h2V9.75q0-.325.213-.538Q6.925 9 7.25 9q.325 0 .537.212Q8 9.425 8 9.75v4.5q0 .325-.213.537Q7.575 15 7.25 15q-.325 0-.537-.213-.213-.212-.213-.537V12.5h-2v1.75q0 .325-.213.537Q4.075 15 3.75 15Zm16.025 7.6L1.4 4.225 2.8 2.8l18.375 18.4ZM10 15v-3.575l1.5 1.5v.575h.6l1.5 1.5Z"/>
    </Icon>
  );
});

IconMaterialHlsOff.displayName = 'AmauiIconMaterialHlsOff';

export default IconMaterialHlsOff;
