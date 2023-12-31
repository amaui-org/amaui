import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAlertW100'

      short_name='PersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800.035-534Q789-534 781.5-541.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM786-666v-148h28v148h-28ZM360-512q-44.55 0-76.275-31.725Q252-575.45 252-620q0-44.55 31.725-76.275Q315.45-728 360-728q44.55 0 76.275 31.725Q468-664.55 468-620q0 44.55-31.725 76.275Q404.55-512 360-512ZM92-232v-52q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v52H92Zm28-28h480v-24q0-14-9.5-26.5T564-332q-48-23-99.687-35.5T360-380q-52.626 0-104.313 12.5Q204-355 156-332q-17 9-26.5 21.5T120-284v24Zm240-280q33 0 56.5-23.5T440-620q0-33-23.5-56.5T360-700q-33 0-56.5 23.5T280-620q0 33 23.5 56.5T360-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialPersonAlertW100.displayName = 'AmauiIconMaterialPersonAlertW100';

export default IconMaterialPersonAlertW100;
