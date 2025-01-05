$(document).ready(function () {
    // Функција за додавање коментар
    function addComment(carId) {
        console.log(`Adding comment for carId: ${carId}`);
        const commentText = prompt("Внесете коментар:");
        if (commentText) {
            const commentList = $(`#comments-${carId}`);
            if (commentList.length === 0) {
                alert("Листата за коментари не постои за овој автомобил.");
                return;
            }

            // Креирање на нов коментар
            const newComment = $('<li></li>').text(commentText);

            // Додавање на копче за бришење
            const deleteButton = $('<button>Бриши</button>')
                .addClass('btn btn-danger btn-sm ml-2')
                .click(function () {
                    console.log("Deleting comment");
                    $(this).parent().remove();
                });

            newComment.append(deleteButton);
            commentList.append(newComment);
        }
    }

    // Функција за „Лајк“
    let totalLikes = {};

    function likePost(carId) {
        console.log(`Liking post for carId: ${carId}`); // Debug
        if (!totalLikes[carId]) {
            totalLikes[carId] = 0;
        }

        totalLikes[carId]++;
        $(`#total-likes-${carId}`).text(`Вкупни лајкови: ${totalLikes[carId]}`);
    }

    // Listener за додавање коментари
    $('.add-comment').on('click', function () {
        const carId = $(this).closest('.card').find('img').attr('alt');
        console.log(`Коментар за: ${carId}`); // Debug
        addComment(carId);
    });

    // Listener за „Лајк“ копчињата
    $('.like-post').on('click', function () {
        const carId = $(this).closest('.card').find('img').attr('alt');
        console.log(`Лајк за: ${carId}`); // Debug
        likePost(carId);
    });

    // Валидација на формата за тест возење
    $('#testDriveForm').on('submit', function (event) {
        event.preventDefault();

        const name = $('#name').val();
        const phone = $('#phone').val();

        if (name === "" || phone === "") {
            alert("Ве молиме внесете ги сите полиња.");
        } else {
            alert("Вашето закажување е успешно! Ќе ве контактираме наскоро.");
            $('#testDriveForm')[0].reset();
        }
    });

    // Испраќање на анкетата
    $('#surveyForm').on('submit', function (event) {
        event.preventDefault();

        const rating = $('#rating').val();
        const suggestions = $('#suggestions').val();

        console.log("Оценка: " + rating + ", Предлози: " + suggestions);
        alert("Вашата анкета е успешно испратена! Ви благодариме за одвоеното време.");
    });
});
