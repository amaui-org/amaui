import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnW100Filled'

      short_name='MicExternalOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.6 7.6q-.225-.3-.337-.65-.113-.35-.113-.7 0-.975.688-1.663Q6.525 3.9 7.5 3.9q.975 0 1.663.687.687.688.687 1.663 0 .35-.112.7-.113.35-.338.65Zm4.65 12.5q-1.275 0-2.188-.912Q7.15 18.275 7.15 17H6.8q-.15 0-.25-.1t-.125-.25l-.75-7.125q-.05-.35.188-.587.237-.238.562-.238h2.15q.35 0 .575.238.225.237.175.587l-.75 7.125q-.025.15-.125.25t-.25.1h-.35q0 1 .7 1.7t1.7.7q1 0 1.7-.7t.7-1.7V7q0-1.275.912-2.188.913-.912 2.188-.912 1.275 0 2.188.912.912.913.912 2.188v12.75q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V7q0-1-.7-1.7t-1.7-.7q-1 0-1.7.7t-.7 1.7v10q0 1.275-.912 2.188-.913.912-2.188.912Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnW100Filled.displayName = 'AmauiIconMaterialMicExternalOnW100Filled';

export default IconMaterialMicExternalOnW100Filled;
