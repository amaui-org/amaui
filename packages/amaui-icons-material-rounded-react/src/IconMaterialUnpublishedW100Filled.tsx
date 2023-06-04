import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnpublishedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedW100Filled'

      short_name='Unpublished'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-3.425-3.425q-1.15.975-2.575 1.525-1.425.55-3.05.55Zm7.4-4.1-4.875-4.875L16.5 9.75q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-1.975 1.975L7.4 4.6q1-.625 2.162-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.438-.338 1.162-.963 2.162Zm-6.775-2.975-.5-.5L10.55 14.7l-2.6-2.6q-.1-.1-.237-.112-.138-.013-.263.112t-.125.25q0 .125.125.25l2.575 2.575q.225.225.525.225.3 0 .525-.225Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedW100Filled.displayName = 'AmauiIconMaterialUnpublishedW100Filled';

export default IconMaterialUnpublishedW100Filled;
