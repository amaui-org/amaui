import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCarWashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCarWashW100'

      short_name='LocalCarWash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.1q-.45 0-.775-.325T10.9 4q0-.35.225-.75T12 2.1q.65.75.875 1.15.225.4.225.75 0 .45-.325.775T12 5.1Zm-4.7 0q-.45 0-.775-.325T6.2 4q0-.35.225-.75T7.3 2.1q.65.75.875 1.15.225.4.225.75 0 .45-.325.775T7.3 5.1Zm9.4 0q-.45 0-.775-.325T15.6 4q0-.35.225-.75T16.7 2.1q.65.75.875 1.15.225.4.225.75 0 .45-.325.775T16.7 5.1ZM4.3 21.7v-7.5l2.075-5.9h11.25l2.075 5.9v7.5H19v-2H5v2Zm1-8.2h13.4L17.1 9H6.9Zm-.3.7V19Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 15.6 7.4 15.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 19h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialLocalCarWashW100.displayName = 'AmauiIconMaterialLocalCarWashW100';

export default IconMaterialLocalCarWashW100;
