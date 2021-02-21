import React from 'react'
import { ArrowBack, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import './Mail.css'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
const Mail = () => {
    const history = useHistory()
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__important" />
                    <p>Title</p>
                    <div className="mail__time">
                        <p>10pm</p>

                    </div>
                </div>
                <div className="mail__message">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui earum molestiae. Voluptates dolore corporis voluptatum alias quos facere doloremque eos voluptatibus maxime consequuntur, molestiae illo adipisci perferendis, animi ratione deserunt eaque itaque. Voluptates nostrum sint itaque tempore ut similique molestiae harum ipsa doloremque minus, vero nihil sequi! Exercitationem odio, laudantium distinctio magnam in asperiores dignissimos! Corporis id tenetur rerum error praesentium! Quas ut dolor, officia hic distinctio deserunt, suscipit minus adipisci nulla exercitationem cumque illum incidunt magni beatae facere officiis ab quasi dicta. Modi cumque veniam commodi nesciunt, rerum laudantium placeat? Hic quaerat perferendis, temporibus in consequuntur ad consectetur doloremque, animi asperiores eligendi dolor quia? Facere minus earum, atque vero expedita ab possimus iste accusantium odio debitis odit esse facilis sed, accusamus distinctio eaque doloribus amet unde. Enim error vero reprehenderit, iste pariatur itaque suscipit repellendus molestiae aut, quisquam impedit necessitatibus excepturi consectetur aliquid, aperiam explicabo fuga inventore praesentium nesciunt ut officiis fugit neque minima? Quam ad culpa eum iure illum sed ipsa nulla non aperiam, officiis dolore optio soluta laborum dignissimos rerum mollitia ullam ipsam possimus officia atque tenetur est tempore. Reprehenderit natus at minus itaque cum, nemo enim obcaecati, soluta nobis quis necessitatibus quidem quia minima tempore perferendis impedit veritatis odio in debitis libero ipsa! Voluptatibus, dolorum et modi placeat laborum quidem, facilis ullam tenetur natus nam expedita reiciendis nostrum hic quam iure in? Ut ullam distinctio doloremque provident itaque debitis eius et, culpa aperiam placeat tempora illo asperiores quos, nostrum quam in vel reiciendis inventore numquam omnis esse assumenda. Aliquid illo doloribus eius omnis soluta deleniti doloremque quos incidunt porro eaque dolores atque, esse exercitationem facere! Quos omnis facere deleniti tempore temporibus dignissimos neque nobis excepturi ex dolorem nihil, fuga ullam illum nesciunt. Rerum dolorum beatae voluptatum similique. Quod doloremque ex iure quas explicabo eaque adipisci inventore accusantium sed! Harum quasi laudantium illum corrupti doloribus sequi deserunt totam at animi aspernatur soluta officiis fugiat, nulla cumque necessitatibus consequatur eius. Eius, veniam, obcaecati asperiores architecto repudiandae harum magnam minima aliquid quod cum in velit, nemo similique provident illo amet voluptatem distinctio quas at est culpa eum. Delectus deleniti labore suscipit? Mollitia ratione dicta voluptates quae eveniet repellat tenetur voluptatum voluptatibus et autem assumenda, nostrum sed! Doloribus dolore maiores molestiae minima possimus, quas, libero animi iusto architecto sed sunt voluptas iure rerum dolorum voluptates hic culpa incidunt veritatis facere sapiente, et odit officia. Debitis repudiandae sed quae quam maiores voluptas. Ex aspernatur culpa quo tempore placeat iste neque incidunt quas quaerat, maiores excepturi sed deleniti porro, eveniet eligendi nulla voluptate temporibus possimus odit repellat reprehenderit omnis? Mollitia similique aliquid facere perspiciatis, nihil nulla, est quia in vitae ullam ea incidunt perferendis! Aspernatur quis voluptas quidem cupiditate laboriosam, repudiandae at cumque, dicta esse debitis facilis sequi autem dolore dolorem tenetur vero consequuntur! Blanditiis voluptate debitis totam repellendus omnis placeat illum sunt qui optio ab atque est tempore consectetur, vero doloribus quisquam fugit officia vel ipsum ut saepe mollitia? Corporis accusamus sapiente beatae debitis sunt ducimus ut, iste deleniti in? </p>
                </div>

            </div>

        </div>
    )
}

export default Mail
