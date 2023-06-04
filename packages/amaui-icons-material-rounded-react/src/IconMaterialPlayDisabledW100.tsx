import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 13.05-.5-.5.9-.55-3.95-2.5L9.3 7.45v-.1l6.3 4q.35.2.338.625-.013.425-.363.65Zm-4.45 2.875q-.375.25-.762.025-.388-.225-.388-.675V11.25l-4.1-4.1q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l11.6 11.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-4.2-4.2ZM10 12Zm0 3.35 2.05-1.3L10 12Zm1.35-5.85Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100.displayName = 'AmauiIconMaterialPlayDisabledW100';

export default IconMaterialPlayDisabledW100;
