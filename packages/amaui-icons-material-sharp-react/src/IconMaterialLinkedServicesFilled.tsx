import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedServicesFilled'

      short_name='LinkedServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47Zm0 560q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Zm0-640q33 0 56.5-23.5T840-760q0-33-23.5-56.5T760-840q-33 0-56.5 23.5T680-760q0 33 23.5 56.5T760-680Zm-560 0q33 0 56.5-23.5T280-760q0-33-23.5-56.5T200-840q-32 0-56 23.5T120-760q0 33 24 56.5t56 23.5Zm560 560q33 0 56.5-24t23.5-56q0-33-23.5-56.5T760-280q-33 0-56.5 23.5T680-200q0 32 23.5 56t56.5 24Zm-560 0q33 0 56.5-24t23.5-56q0-33-23.5-56.5T200-280q-32 0-56 23.5T120-200q0 32 24 56t56 24Zm560-560q-33 0-56.5-23.5T680-760q0-33 23.5-56.5T760-840q33 0 56.5 23.5T840-760q0 33-23.5 56.5T760-680Zm-560 0q-32 0-56-23.5T120-760q0-33 24-56.5t56-23.5q33 0 56.5 23.5T280-760q0 33-23.5 56.5T200-680Zm560 560q-33 0-56.5-24T680-200q0-33 23.5-56.5T760-280q33 0 56.5 23.5T840-200q0 32-23.5 56T760-120Zm-560 0q-32 0-56-24t-24-56q0-33 24-56.5t56-23.5q33 0 56.5 23.5T280-200q0 32-23.5 56T200-120Z"/>
    </Icon>
  );
});

IconMaterialLinkedServicesFilled.displayName = 'AmauiIconMaterialLinkedServicesFilled';

export default IconMaterialLinkedServicesFilled;
