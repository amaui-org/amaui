import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEditW100'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M472-260Zm-260 28v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q24 0 48.5 3t49.5 8l-23 23q-19.231-2.571-37.5-4.286Q499.231-380 480-380q-52.626 0-104.313 12.5Q324-355 276-332q-17 9-26.5 21.5T240-284v24h232v28H212Zm360 60v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM600-200h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19ZM480-512q-44.55 0-76.275-31.725Q372-575.45 372-620q0-44.55 31.725-76.275Q435.45-728 480-728q44.55 0 76.275 31.725Q588-664.55 588-620q0 44.55-31.725 76.275Q524.55-512 480-512Zm0-28q33 0 56.5-23.5T560-620q0-33-23.5-56.5T480-700q-33 0-56.5 23.5T400-620q0 33 23.5 56.5T480-540Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialPersonEditW100.displayName = 'AmauiIconMaterialPersonEditW100';

export default IconMaterialPersonEditW100;
