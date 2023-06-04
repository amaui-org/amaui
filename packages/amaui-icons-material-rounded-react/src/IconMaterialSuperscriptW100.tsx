import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSuperscriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptW100'

      short_name='Superscript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.9 8.85q-.325 0-.537-.213-.213-.212-.213-.537V6.85q0-.3.2-.5t.5-.2h2.3v-1.3H18.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65q.3 0 .5.2t.2.5v1.3q0 .3-.2.5t-.5.2h-2.3v1.3h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8.025 19.025q-.2 0-.312-.188-.113-.187.012-.362l3.7-5.75-3.35-5.2q-.125-.175-.013-.363.113-.187.313-.187.1 0 .175.05.075.05.125.125l3.3 5.15 3.375-5.175q.05-.075.125-.113.075-.037.175-.037.2 0 .3.175.1.175-.025.35l-3.4 5.225L16.25 18.5q.125.175.025.35t-.3.175q-.1 0-.175-.038-.075-.037-.125-.112l-3.7-5.725-3.65 5.725q-.05.075-.125.112-.075.038-.175.038Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptW100.displayName = 'AmauiIconMaterialSuperscriptW100';

export default IconMaterialSuperscriptW100;
