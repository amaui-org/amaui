import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadW100Filled'

      short_name='AssuredWorkload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 17q-.15 0-.25-.1t-.1-.25v-7.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.6q0 .15-.1.25t-.25.1Zm4.7 0q-.15 0-.25-.1t-.1-.25v-7.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.6q0 .15-.1.25T12 17ZM4.275 6.7q-.125 0-.2-.075Q4 6.55 4 6.425q0-.1.062-.188.063-.087.138-.137l7.5-3.5q.075-.05.15-.063.075-.012.15-.012t.15.012q.075.013.15.063l7.5 3.5q.075.05.138.137.062.088.062.188 0 .125-.075.2-.075.075-.2.075Zm.075 13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10.475q0 .2.025.362l.05.338Zm12-5.125V9.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.175ZM20 23q-1.4-.35-2.3-1.587-.9-1.238-.9-2.763v-1.575q0-.2.113-.387.112-.188.312-.288l2.45-1.225q.15-.075.325-.075.175 0 .325.075l2.45 1.225q.2.1.313.288.112.187.112.387v1.575q0 1.525-.9 2.763Q21.4 22.65 20 23Zm1.925-5.2q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-2.15 2.15-.725-.725q-.1-.1-.238-.112-.137-.013-.262.112t-.125.25q0 .125.125.25l.7.7q.125.125.25.175.125.05.275.05.15 0 .275-.05.125-.05.25-.175Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadW100Filled.displayName = 'AmauiIconMaterialAssuredWorkloadW100Filled';

export default IconMaterialAssuredWorkloadW100Filled;
