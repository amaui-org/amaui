import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleBuddhistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistW100'

      short_name='TempleBuddhist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 21.35v-9q-1.125-.175-1.912-.888-.788-.712-1.013-1.787h.7q.25.825.95 1.4t1.6.575H6.65v-3.3q-1.125-.225-1.887-.912Q4 6.75 3.725 5.675h.7q.25.825.95 1.4t1.6.575h.85L12 2.075l4.175 5.575h.85q.9 0 1.6-.575.7-.575.95-1.4h.7q-.2 1.05-.975 1.737-.775.688-1.95.938v3.3h1.675q.9 0 1.6-.575.7-.575.95-1.4h.7q-.175 1.05-.963 1.763-.787.712-1.962.912v9h-5.7v-5h-3.3v5ZM8.7 7.65h6.6L12 3.25Zm-1.35 4h9.3v-3.3h-9.3Zm-2 9h4.3v-5h4.7v5h4.3v-8.3H5.35Zm6.65-8.3Zm0-4.7Zm0 4Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistW100.displayName = 'AmauiIconMaterialTempleBuddhistW100';

export default IconMaterialTempleBuddhistW100;
