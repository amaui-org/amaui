import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryW100Filled'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m641-172-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Zm-163 0q-117 0-204-76T173-440h28q17 103 94.5 171.5T478-200q11 0 22-.5t22-2.5v28q-11 2-22 2.5t-22 .5ZM222-640v-144h28v96q45-47 104-73.5T478-788q128 0 218 90t90 218v14h-28v-14q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222Zm342 263-97-97v-206h28v194l84 84-15 25Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryW100Filled.displayName = 'AmauiIconMaterialDeleteHistoryW100Filled';

export default IconMaterialDeleteHistoryW100Filled;
