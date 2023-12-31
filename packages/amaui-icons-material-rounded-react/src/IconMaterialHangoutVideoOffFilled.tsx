import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffFilled'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l24 24v112L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L686-160H160Zm710-44L720-354v-224q0-19-17-27t-32 3l-111 88v-84q0-17-11.5-28.5T520-638h-84L274-800h526q33 0 56.5 23.5T880-720v480q0 9-2.5 18t-7.5 18ZM280-320h246L240-606v246q0 17 11.5 28.5T280-320Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffFilled.displayName = 'AmauiIconMaterialHangoutVideoOffFilled';

export default IconMaterialHangoutVideoOffFilled;
