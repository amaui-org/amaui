import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherHousesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesW100'

      short_name='OtherHouses'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-8.325L3.6 11.95q-.125.1-.25.075-.125-.025-.225-.15t-.087-.25q.012-.125.137-.225l8.375-6.425q.1-.075.212-.113.113-.037.238-.037.125 0 .238.037.112.038.212.113l8.375 6.425q.125.1.138.225.012.125-.088.25-.1.125-.225.15-.125.025-.25-.075l-1.7-1.325v8.325q0 .325-.212.537-.213.213-.538.213ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12Zm2-4.3q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.275 13.3 8 13.3t-.487.212Q7.3 13.725 7.3 14t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 13.3 12 13.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q16.275 13.3 16 13.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100.displayName = 'AmauiIconMaterialOtherHousesW100';

export default IconMaterialOtherHousesW100;
