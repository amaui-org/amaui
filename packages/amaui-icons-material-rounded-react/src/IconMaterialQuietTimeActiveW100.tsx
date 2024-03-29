import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveW100'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.2 17.225-.525-.525q.55-.475 1.013-1.012.462-.538.812-1.188-2.15-.2-4.075-1.1-1.925-.9-3.45-2.425Q11.45 9.45 10.55 7.537q-.9-1.912-1.075-4.062-.65.35-1.2.812-.55.463-1 1.013l-.5-.5q.5-.575 1.088-1.063.587-.487 1.312-.912.35-.2.675-.025.325.175.375.55.2 2.025 1.038 3.85.837 1.825 2.262 3.25 1.425 1.45 3.25 2.262 1.825.813 3.825 1.013.4.05.575.4.175.35-.025.7-.4.725-.887 1.312-.488.588-1.063 1.088Zm0 3.8-2.375-2.375q-.8.325-1.637.5-.838.175-1.713.175-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-.875.175-1.713.175-.837.5-1.637L3 4.825q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125Zm-5.725-2.4q.725 0 1.45-.125t1.375-.375L11.075 12.9l-5.2-5.2q-.25.675-.375 1.387-.125.713-.125 1.438 0 3.375 2.363 5.737 2.362 2.363 5.737 2.363Zm-2.4-5.725Zm1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveW100.displayName = 'AmauiIconMaterialQuietTimeActiveW100';

export default IconMaterialQuietTimeActiveW100;
