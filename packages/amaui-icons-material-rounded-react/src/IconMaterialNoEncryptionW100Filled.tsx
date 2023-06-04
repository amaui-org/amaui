import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoEncryptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionW100Filled'

      short_name='NoEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 17.65 10.35 9.3H15v-2q0-1.275-.912-2.138Q13.175 4.3 11.9 4.3q-1.275 0-2.187.875Q8.8 6.05 8.8 7.3v.3l-.65-.65q.125-1.425 1.188-2.388Q10.4 3.6 11.9 3.6q1.575 0 2.688 1.075Q15.7 5.75 15.7 7.3v2h1.5q.65 0 1.075.425.425.425.425 1.075ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-8.4q0-.65.4-1.013.4-.362.85-.437l-5.6-5.6q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l19.3 19.3q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125L17.8 20.6q-.225.075-.475.088-.25.012-.625.012Zm4.275-6.775q-.2.2-.3.45-.1.25-.1.525 0 .575.387.963.388.387.963.387.275 0 .525-.1t.45-.3Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionW100Filled.displayName = 'AmauiIconMaterialNoEncryptionW100Filled';

export default IconMaterialNoEncryptionW100Filled;
