import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOff'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m836-236-56-57 16-16q12-12 28-11.5t28 12.5q11 12 11.5 28T852-252l-16 16Zm-76-77-80-80v-7q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400v87Zm7 233L240-607v367h200q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H240q-33 0-56.5-23.5T160-240v-447L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11L868-92q5 5 8.5 13t3.5 16v23q0 17-11.5 28.5T840 0H600q-17 0-28.5-11.5T560-40q0-17 11.5-28.5T600-80h167Zm-87-520v40q0 17 11.5 28.5T720-520q17 0 28.5-11.5T760-560v-47q0-16-6-30.5T737-663L543-857q-11-11-25.5-17t-30.5-6H240q-11 0-20 2.5t-18 7.5l71 70h207v140q0 25 17.5 42.5T540-600h140ZM415-432Zm104-122Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOff.displayName = 'AmauiIconMaterialFileSaveOff';

export default IconMaterialFileSaveOff;
