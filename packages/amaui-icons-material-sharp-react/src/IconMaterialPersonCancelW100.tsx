import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCancelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCancelW100'

      short_name='PersonCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m696-476-20-20 84-84-84-83 20-20 84 84 83-84 20 20-83 83 83 84-20 20-83-83-84 83Zm-336-36q-44.55 0-76.275-31.725Q252-575.45 252-620q0-44.55 31.725-76.275Q315.45-728 360-728q44.55 0 76.275 31.725Q468-664.55 468-620q0 44.55-31.725 76.275Q404.55-512 360-512ZM92-232v-52q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v52H92Zm28-28h480v-24q0-14-9.5-26.5T564-332q-48-23-99.687-35.5T360-380q-52.626 0-104.313 12.5Q204-355 156-332q-17 9-26.5 21.5T120-284v24Zm240-280q33 0 56.5-23.5T440-620q0-33-23.5-56.5T360-700q-33 0-56.5 23.5T280-620q0 33 23.5 56.5T360-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialPersonCancelW100.displayName = 'AmauiIconMaterialPersonCancelW100';

export default IconMaterialPersonCancelW100;
