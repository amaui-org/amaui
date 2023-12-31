import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOffW100'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M834-92 146-780q-4-4-4.5-9.5T146-800q5-5 10-5t10 5l688 688-20 20ZM360-332q-11 0-19.5-8t-8.5-20q0-11 8.5-19.5T360-388h218l56 56H360ZM212-452v-56h56v56h-56Zm120 0v-56h56v56h-56Zm360 0v-56h56v56h-56ZM212-572v-56h56v56h-56Zm360 0v-56h56v56h-56Zm120 0v-56h56v56h-56Zm118 303-10-10v-369q0-12-10-22t-22-10H400l-28-28h396q26 0 43 17t17 43v336q0 13-5 24t-13 19Zm-618 17q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h66l28 28h-94q-12 0-22 10t-10 22v336q0 12 10 22t22 10h494l28 28H192Zm260-376h56v56l-56-56Zm120 120h56l-1 56-55-56Zm-126 28Zm154 0Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOffW100.displayName = 'AmauiIconMaterialKeyboardOffW100';

export default IconMaterialKeyboardOffW100;
