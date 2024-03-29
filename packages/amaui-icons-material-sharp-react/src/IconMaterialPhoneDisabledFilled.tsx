import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledFilled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.075 14.325 15.65 12.9q.275-.3.763-1.037.487-.738.612-.963l-2.85-2.875L15.1 3h5.85q.05.275.05.525v.525q0 2.75-1.038 5.375-1.037 2.625-2.887 4.9ZM3.95 21q-.275 0-.512-.012Q3.2 20.975 3 20.95v-5.825L8 14.1l2.9 2.9q.5-.3.975-.613.475-.312.925-.687L1.4 4.3l1.4-1.4 18.4 18.4-1.4 1.4-5.55-5.55q-2.225 1.8-4.887 2.825Q6.7 21 3.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledFilled.displayName = 'AmauiIconMaterialPhoneDisabledFilled';

export default IconMaterialPhoneDisabledFilled;
