import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneInTalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkW100'

      short_name='PhoneInTalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.1 11.3q-.225-2.8-2.187-4.763Q14.95 4.575 12.15 4.35v-.7q1.55.1 2.9.725 1.35.625 2.375 1.65t1.65 2.375q.625 1.35.725 2.9Zm-4 0q-.225-1.125-1.025-1.938-.8-.812-1.925-1.012v-.7q1.425.2 2.425 1.212 1 1.013 1.225 2.438Zm3.375 8.25q-2.425.025-4.962-1.275-2.538-1.3-4.613-3.362-2.075-2.063-3.387-4.601Q4.2 7.775 4.2 5.35q0-.25.013-.525.012-.275.062-.525h3.95l.825 3.775L6.4 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012ZM6.05 9.85l2.225-2L7.65 5H4.925q-.1 1.2.263 2.475.362 1.275.862 2.375Zm8.2 8q.875.45 2.225.775t2.325.2v-2.7l-2.4-.475Zm-8.2-8Zm8.2 8Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkW100.displayName = 'AmauiIconMaterialPhoneInTalkW100';

export default IconMaterialPhoneInTalkW100;
