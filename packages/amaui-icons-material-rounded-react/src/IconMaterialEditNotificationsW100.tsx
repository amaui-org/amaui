import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotificationsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.325 12.65q-.175 0-.287-.113-.113-.112-.113-.287v-.65q0-.025.125-.3l4.975-4.975L19.25 7.55l-4.975 4.975q-.025.025-.3.125Zm6.625-5.8.725-.725q.125-.125.125-.25t-.125-.25L19.95 4.9q-.125-.125-.25-.125t-.25.125l-.725.725ZM5 18.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q.55.1 1.25.375t1.275.775l-.5.5q-.6-.475-1.375-.738-.775-.262-1.5-.262-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3v7.65h9.3v-4.975l.7-.7v5.675H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 2.85q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm0-9.7Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100.displayName = 'AmauiIconMaterialEditNotificationsW100';

export default IconMaterialEditNotificationsW100;
