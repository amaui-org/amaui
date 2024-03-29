import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeakRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemove'

      short_name='LeakRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.75 22.6-3.4-3.45q-.15.45-.25.9T16 21h-2q0-.9.213-1.75.212-.85.637-1.6L13.4 16.2q-.675 1.05-1.037 2.262Q12 19.675 12 21h-2q0-1.725.5-3.312.5-1.588 1.45-2.938l-2.7-2.7q-1.35.9-2.938 1.425Q4.725 14 3 14v-2q1.325 0 2.537-.363Q6.75 11.275 7.8 10.6L6.35 9.15q-.75.425-1.6.637Q3.9 10 3 10V8q.5 0 .938-.1.437-.1.862-.25L1.4 4.2l1.4-1.4 18.4 18.4Zm-.55-6.25-1.55-1.5q.75-.425 1.6-.638Q20.1 14 21 14v2q-.5 0-.938.075-.437.075-.862.275Zm-3-2.95-1.45-1.45q1.35-.95 2.938-1.45Q19.275 10 21 10v2q-1.325 0-2.538.363-1.212.362-2.262 1.037Zm-4.15-4.2L10.6 7.75q.675-1.025 1.037-2.225Q12 4.325 12 3h2q0 1.725-.5 3.3-.5 1.575-1.45 2.9Zm-2.9-2.9-1.5-1.5q.15-.425.25-.862Q8 3.5 8 3h2q0 .9-.212 1.737-.213.838-.638 1.563Z"/>
    </Icon>
  );
});

IconMaterialLeakRemove.displayName = 'AmauiIconMaterialLeakRemove';

export default IconMaterialLeakRemove;
