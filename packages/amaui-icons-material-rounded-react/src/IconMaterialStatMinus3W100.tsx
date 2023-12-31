import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus3W100'

      short_name='StatMinus3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-158 174-174q4-4 9.5-4.5T674-332q5 5 5 10t-5 10L501-139q-9 9-21 9t-21-9L286-312q-4-4-4.5-9.5T286-332q5-5 10-5t10 5l174 174Zm0-238 174-174q4-4 9.5-4.5T674-570q5 5 5 10t-5 10L501-377q-9 9-21 9t-21-9L286-550q-4-4-4.5-9.5T286-570q5-5 10-5t10 5l174 174Zm0-238 174-174q4-4 9.5-4.5T674-808q5 5 5 10t-5 10L501-615q-9 9-21 9t-21-9L286-788q-4-4-4.5-9.5T286-808q5-5 10-5t10 5l174 174Z"/>
    </Icon>
  );
});

IconMaterialStatMinus3W100.displayName = 'AmauiIconMaterialStatMinus3W100';

export default IconMaterialStatMinus3W100;
