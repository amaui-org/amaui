import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOffFilled'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-449q20 0 35-13t25-28l-90-90v101q0 13 8.5 21.5T350-449ZM120-132q-17 0-28.5-11.5T80-172v-80q0-33 23.5-56.5T160-332h407l-60-60H240q-17 0-28.5-11.5T200-432v-268L56-844q-11-11-11.5-27.5T56-900q11-11 28-11t28 11l736 735q12 12 12 28t-12 28q-12 12-28.5 12T791-109l-24-23H120Zm572-301L587-538q23-8 38-28.5t15-46.5q0-33-23.5-56T560-692q-26 0-46.5 15T485-639L261-864q-19-19-9-43.5t37-24.5h391q33 0 56.5 23.5T760-852v391q0 27-24.5 37t-43.5-9Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOffFilled.displayName = 'AmauiIconMaterialSmartCardReaderOffFilled';

export default IconMaterialSmartCardReaderOffFilled;
