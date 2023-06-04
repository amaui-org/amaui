import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.05 18.85q-.15 0-.25-.1t-.1-.25v-1H4q-.725 0-1.212-.488Q2.3 16.525 2.3 15.8v-5q0-.875.563-1.288Q3.425 9.1 4 9.1V7.6q0-.725.488-1.213Q4.975 5.9 5.7 5.9h12.6q.725 0 1.213.487Q20 6.875 20 7.6v1.5q.675 0 1.188.45.512.45.512 1.25v5q0 .725-.487 1.212-.488.488-1.213.488h-.7v1q0 .15-.075.25t-.225.1q-.15 0-.25-.1t-.1-.25v-1H5.4v1q0 .15-.1.25t-.25.1ZM4 16.8h16q.425 0 .712-.287.288-.288.288-.713v-5q0-.425-.288-.713Q20.425 9.8 20 9.8t-.712.287Q19 10.375 19 10.8v3.35H5V10.8q0-.425-.287-.713Q4.425 9.8 4 9.8t-.712.287Q3 10.375 3 10.8v5q0 .425.288.713.287.287.712.287Zm1.7-3.35h12.6V10.8q0-.5.275-.925.275-.425.725-.625V7.6q0-.425-.287-.713-.288-.287-.713-.287H5.7q-.425 0-.712.287-.288.288-.288.713v1.65q.45.2.725.625.275.425.275.925Zm6.3 0Zm0 3.35Zm0-2.65Z"/>
    </Icon>
  );
});

IconMaterialChairW100.displayName = 'AmauiIconMaterialChairW100';

export default IconMaterialChairW100;
