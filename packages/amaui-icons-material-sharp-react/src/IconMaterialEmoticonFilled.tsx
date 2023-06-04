import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmoticonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonFilled'

      short_name='Emoticon'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M260 776q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320 716q0 26-17.5 43T260 776Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320 436q0 26-17.5 43T260 496Zm140 120v-80h160v80H400Zm288 200-66-44q28-43 43-92.5T680 576q0-66-21.5-124T598 347l61-51q48 57 74.5 128.5T760 576q0 67-19 127.5T688 816Z"/>
    </Icon>
  );
});

IconMaterialEmoticonFilled.displayName = 'AmauiIconMaterialEmoticonFilled';

export default IconMaterialEmoticonFilled;
