import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPowerW100Filled'

      short_name='SettingsPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-.15 0-.25-.1t-.1-.25V4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.15q0 .15-.1.25T12 12Zm0 5.7q-2.8 0-4.75-1.95Q5.3 13.8 5.3 11q0-1.625.738-3.025.737-1.4 2.012-2.4.125-.1.288-.1.162 0 .262.125t.063.262Q8.625 6 8.5 6.1q-1.15.875-1.825 2.162Q6 9.55 6 11q0 2.5 1.75 4.25T12 17q2.5 0 4.25-1.75T18 11q0-1.475-.663-2.763Q16.675 6.95 15.5 6.1q-.125-.1-.162-.238-.038-.137.062-.262t.263-.138q.162-.012.287.113 1.275 1.05 2.012 2.437Q18.7 9.4 18.7 11q0 2.8-1.95 4.75Q14.8 17.7 12 17.7Zm-4 6q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsPowerW100Filled.displayName = 'AmauiIconMaterialSettingsPowerW100Filled';

export default IconMaterialSettingsPowerW100Filled;
